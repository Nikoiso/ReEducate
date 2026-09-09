const Tweet = require("../models/Tweet");

const getTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find()
      .populate("author", "username email")
      .populate("comments.author", "username email")
      .sort({ createdAt: -1 });
    res.status(200).json(tweets);
  } catch (err) {
    res.status(500).json({ error: "სერვერის შეცდომა" });
  }
};

const createTweet = async (req, res) => {
  try {
    const { body, authorId } = req.body;
    if (!body || !authorId) {
      return res.status(400).json({ error: "ტექსტი და ავტორი სავალდებულოა" });
    }

    const newTweet = await Tweet.create({ body, author: authorId });
    const populatedTweet = await newTweet.populate("author", "username email");

    res.status(201).json(populatedTweet);
  } catch (err) {
    res.status(500).json({ error: "სერვერის შეცდომა" });
  }
};

const editTweet = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req.body;

    const updatedTweet = await Tweet.findByIdAndUpdate(
      id,
      { body },
      { new: true },
    ).populate("author", "username email");

    if (!updatedTweet)
      return res.status(404).json({ error: "ტვიტი ვერ მოიძებნა" });
    res.status(200).json(updatedTweet);
  } catch (err) {
    res.status(500).json({ error: "სერვერის შეცდომა" });
  }
};

const toggleLike = async (req, res) => {
  try {
    const tweetId = req.params.id;
    const { userId } = req.body;

    const tweet = await Tweet.findById(tweetId);
    if (!tweet) return res.status(404).json({ error: "ტვიტი ვერ მოიძებნა" });

    const index = tweet.likes.indexOf(userId);
    if (index > -1) {
      tweet.likes.splice(index, 1);
    } else {
      tweet.likes.push(userId);
    }

    await tweet.save();
    res.status(200).json(tweet);
  } catch (err) {
    res.status(500).json({ error: "სერვერის შეცდომა" });
  }
};

const toggleBookmark = async (req, res) => {
  try {
    const tweetId = req.params.id;
    const { userId } = req.body;

    const tweet = await Tweet.findById(tweetId);
    if (!tweet) return res.status(404).json({ error: "ტვიტი ვერ მოიძებნა" });

    const index = tweet.bookmarks.indexOf(userId);
    if (index > -1) {
      tweet.bookmarks.splice(index, 1);
    } else {
      tweet.bookmarks.push(userId);
    }

    await tweet.save();
    res.status(200).json(tweet);
  } catch (err) {
    res.status(500).json({ error: "სერვერის შეცდომა" });
  }
};

const toggleRepost = async (req, res) => {
  try {
    const tweetId = req.params.id;
    const { userId } = req.body;

    const tweet = await Tweet.findById(tweetId);
    if (!tweet) return res.status(404).json({ error: "ტვიტი ვერ მოიძებნა" });

    const index = tweet.reposts.indexOf(userId);
    if (index > -1) {
      tweet.reposts.splice(index, 1);
    } else {
      tweet.reposts.push(userId);
    }

    await tweet.save();
    res.status(200).json(tweet);
  } catch (err) {
    res.status(500).json({ error: "სერვერის შეცდომა" });
  }
};

const addComment = async (req, res) => {
  try {
    const tweetId = req.params.id;
    const { body, userId } = req.body;

    if (!body || !userId) {
      return res.status(400).json({ error: "კომენტარის ტექსტი სავალდებულოა" });
    }

    const tweet = await Tweet.findById(tweetId);
    if (!tweet) return res.status(404).json({ error: "ტვიტი ვერ მოიძებნა" });

    tweet.comments.push({ body, author: userId });
    await tweet.save();

    const updatedTweet = await Tweet.findById(tweetId)
      .populate("author", "username email")
      .populate("comments.author", "username email");

    res.status(200).json(updatedTweet);
  } catch (err) {
    res.status(500).json({ error: "სერვერის შეცდომა" });
  }
};

const deleteTweet = async (req, res) => {
  try {
    await Tweet.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "ტვიტი წაიშალა" });
  } catch (err) {
    res.status(500).json({ error: "სერვერის შეცდომა" });
  }
};

module.exports = {
  getTweets,
  createTweet,
  editTweet,
  toggleLike,
  toggleBookmark,
  toggleRepost,
  addComment,
  deleteTweet,
};
