const express = require("express");
const { 
  getTweets, 
  createTweet, 
  editTweet, 
  toggleLike, 
  toggleBookmark, 
  toggleRepost, 
  addComment, 
  deleteTweet 
} = require("../controllers/tweetController");

const router = express.Router();

router.get("/", getTweets);
router.post("/", createTweet);
router.put("/:id", editTweet);
router.post("/:id/like", toggleLike);
router.post("/:id/bookmark", toggleBookmark);
router.post("/:id/repost", toggleRepost);
router.post("/:id/comment", addComment);
router.delete("/:id", deleteTweet);

module.exports = router;