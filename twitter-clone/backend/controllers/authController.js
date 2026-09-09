const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "ყველა ველი სავალდებულოა" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "ეს იმეილი უკვე დაკავებულია" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "მომხმარებელი წარმატებით შეიქმნა",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "სერვერის შეცდომა" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "იმეილი და პაროლი სავალდებულოა" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "მომხმარებელი ვერ მოიძებნა" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "არასწორი პაროლი" });
    }

    res.status(200).json({
      message: "წარმატებული ავტორიზაცია",
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: "სერვერის შეცდომა" });
  }
};

module.exports = { register, login };
