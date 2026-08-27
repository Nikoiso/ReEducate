const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  body: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  reposts: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [
    {
      body: { type: String, required: true },
      author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      createdAt: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Tweet", tweetSchema);