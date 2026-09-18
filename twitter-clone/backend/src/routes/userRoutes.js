const express = require("express");

const {
  getUser,
  updateProfile,
  updateCover,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
  searchUsers,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/search", searchUsers);

router.get("/:id", getUser);

router.get("/:id/followers", getFollowers);

router.get("/:id/following", getFollowing);

router.put(
  "/profile",
  protect,
  upload.single("avatar"),
  updateProfile
);

router.put(
  "/cover",
  protect,
  upload.single("cover"),
  updateCover
);

router.post("/:id/follow", protect, followUser);

router.delete("/:id/follow", protect, unfollowUser);

module.exports = router;