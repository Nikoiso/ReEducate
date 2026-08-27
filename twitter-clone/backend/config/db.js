const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB წარმატებით დაკავშირდა");
  } catch (error) {
    console.error("❌ MongoDB დაკავშირების შეცდომა:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;