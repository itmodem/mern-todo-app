// ===============================
// 📦 IMPORT REQUIRED PACKAGES
// ===============================

// Express framework (server banane ke liye)
const express = require("express");

// MongoDB connection ke liye mongoose
const mongoose = require("mongoose");

// CORS (frontend ko backend se connect karne ke liye allow karta hai)
const cors = require("cors");

// dotenv (.env file ke variables load karega)
require("dotenv").config();


// ===============================
// 🚀 CREATE EXPRESS APP
// ===============================

const app = express();


// ===============================
// 🛠️ MIDDLEWARE
// ===============================

// CORS enable (cross-origin requests allow karega)
app.use(cors());

// JSON middleware (incoming JSON data read karne ke liye)
app.use(express.json());


// ===============================
// 🗄️ DATABASE CONNECTION FUNCTION
// ===============================

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    process.exit(1); // Agar DB connect nahi hua to server band
  }
};


// ===============================
// 🔌 CONNECT DATABASE
// ===============================

connectDB();


// ===============================
// 🌍 ROUTES
// ===============================

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "✅ Backend is working!" });
});

// Another test route
app.get("/api/done", (req, res) => {
  res.json({ message: "I am testing." });
});


// ===============================
// 🔊 START SERVER
// ===============================

// Port set karna
const PORT = process.env.PORT || 5000;

// Server start
app.listen(PORT, () => {
  console.log(`✅ Server is running on ${PORT}`);
});
