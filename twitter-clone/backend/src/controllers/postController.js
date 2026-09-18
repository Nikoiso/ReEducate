const Post = require("../models/Post");
const Notification = require("../models/Notification");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "x-clone/posts",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

const createPost = async (req, res) => {
  try {
    const { text, parentPost } = req.body;

    if (!text && !req.file) {
      return res.status(400).json({
        message: "Post must contain text or image",
      });
    }

    if (text && text.length > 280) {
      return res.status(400).json({
        message: "Post cannot exceed 280 characters",
      });
    }

    let image = "";

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);

      image = result.secure_url;
    }

    const post = await Post.create({
      text: text || "",
      image,
      author: req.user._id,
      parentPost: parentPost || null,
    });

    const populatedPost = await Post.findById(post._id).populate(
      "author",
      "name username avatar"
    );

    if (parentPost) {
      const parent = await Post.findById(parentPost);

      if (parent && !parent.author.equals(req.user._id)) {
        await Notification.create({
          recipient: parent.author,
          sender: req.user._id,
          type: "reply",
          post: post._id,
        });
      }
    }

    res.status(201).json(populatedPost);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    const posts = await Post.find({
      parentPost: null,
    })
      .populate("author", "name username avatar")
      .populate("likes", "name username avatar")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      page,
      posts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getFollowingPosts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 20;
    const User = require("../models/User");
    const currentUser = await User.findById(req.user._id).select("following");
    const posts = await Post.find({ author: { $in: currentUser.following }, parentPost: null })
      .populate("author", "name username avatar")
      .populate("likes", "name username avatar")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ page, posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author", "name username avatar")
      .populate("likes", "name username avatar")
      .populate("reposts", "name username avatar");

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    if (!post.author.equals(req.user._id)) {
      return res.status(403).json({
        message: "You can only delete your own posts",
      });
    }

    await Post.findByIdAndDelete(req.params.id);

    await Post.deleteMany({
      parentPost: req.params.id,
    });

    res.json({
      message: "Post deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    const alreadyLiked = post.likes.some((id) =>
      id.equals(req.user._id)
    );

    if (alreadyLiked) {
      post.likes = post.likes.filter(
        (id) => !id.equals(req.user._id)
      );

      await post.save();

      return res.json({
        message: "Post unliked",
        liked: false,
        likesCount: post.likes.length,
      });
    }

    post.likes.push(req.user._id);

    await post.save();

    if (!post.author.equals(req.user._id)) {
      await Notification.create({
        recipient: post.author,
        sender: req.user._id,
        type: "like",
        post: post._id,
      });
    }

    res.json({
      message: "Post liked",
      liked: true,
      likesCount: post.likes.length,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const repostPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    const alreadyReposted = post.reposts.some((id) =>
      id.equals(req.user._id)
    );

    if (alreadyReposted) {
      post.reposts = post.reposts.filter(
        (id) => !id.equals(req.user._id)
      );

      await post.save();

      return res.json({
        message: "Repost removed",
        reposted: false,
      });
    }

    post.reposts.push(req.user._id);

    await post.save();

    if (!post.author.equals(req.user._id)) {
      await Notification.create({
        recipient: post.author,
        sender: req.user._id,
        type: "repost",
        post: post._id,
      });
    }

    res.json({
      message: "Post reposted",
      reposted: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getReplies = async (req, res) => {
  try {
    const replies = await Post.find({
      parentPost: req.params.id,
    })
      .populate("author", "name username avatar")
      .sort({ createdAt: 1 });

    res.json(replies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({
      author: req.params.id,
      parentPost: null,
    })
      .populate("author", "name username avatar")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const searchPosts = async (req, res) => {
  try {
    const q = req.query.q || "";

    const posts = await Post.find({
      text: {
        $regex: q,
        $options: "i",
      },
    })
      .populate("author", "name username avatar")
      .sort({ createdAt: -1 })
      .limit(30);

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPost,
  getPosts,
  getFollowingPosts,
  getPost,
  deletePost,
  likePost,
  repostPost,
  getReplies,
  getUserPosts,
  searchPosts,
};
