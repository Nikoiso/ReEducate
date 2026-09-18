const User = require("../models/User");
const mongoose = require("mongoose");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");
const Notification = require("../models/Notification");

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "x-clone",
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

const getUser = async (req, res) => {
  try {
    const identifier = req.params.id;
    const user = await User.findOne(
      mongoose.isValidObjectId(identifier)
        ? { $or: [{ _id: identifier }, { username: identifier.toLowerCase() }] }
        : { username: identifier.toLowerCase() }
    )
      .select("-password")
      .populate("followers", "name username avatar")
      .populate("following", "name username avatar");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, bio } = req.body;

    const user = await User.findById(req.user._id);

    if (name !== undefined) {
      user.name = name;
    }

    if (bio !== undefined) {
      user.bio = bio;
    }

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);

      user.avatar = result.secure_url;
    }

    await user.save();

    res.json({
      message: "Profile updated",
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        bio: user.bio,
        avatar: user.avatar,
        coverImage: user.coverImage,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateCover = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const result = await uploadToCloudinary(req.file.buffer);

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        coverImage: result.secure_url,
      },
      {
        new: true,
      }
    ).select("-password");

    res.json({
      message: "Cover image updated",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const followUser = async (req, res) => {
  try {
    const targetUser = await User.findById(req.params.id);
    const currentUser = await User.findById(req.user._id);

    if (!targetUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (targetUser._id.equals(currentUser._id)) {
      return res.status(400).json({
        message: "You cannot follow yourself",
      });
    }

    if (currentUser.following.includes(targetUser._id)) {
      return res.status(400).json({
        message: "Already following this user",
      });
    }

    currentUser.following.push(targetUser._id);
    targetUser.followers.push(currentUser._id);

    await currentUser.save();
    await targetUser.save();

    await Notification.create({
      recipient: targetUser._id,
      sender: currentUser._id,
      type: "follow",
    });

    res.json({
      message: "User followed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const unfollowUser = async (req, res) => {
  try {
    const targetUser = await User.findById(req.params.id);
    const currentUser = await User.findById(req.user._id);

    if (!targetUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    currentUser.following = currentUser.following.filter(
      (id) => !id.equals(targetUser._id)
    );

    targetUser.followers = targetUser.followers.filter(
      (id) => !id.equals(currentUser._id)
    );

    await currentUser.save();
    await targetUser.save();

    res.json({
      message: "User unfollowed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getFollowers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("followers", "name username avatar bio");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user.followers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getFollowing = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("following", "name username avatar bio");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user.following);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const searchUsers = async (req, res) => {
  try {
    const q = req.query.q || "";

    const users = await User.find({
      $or: [
        {
          name: {
            $regex: q,
            $options: "i",
          },
        },
        {
          username: {
            $regex: q,
            $options: "i",
          },
        },
      ],
    })
      .select("-password")
      .limit(20);

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUser,
  updateProfile,
  updateCover,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
  searchUsers,
};
