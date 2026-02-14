// Express framework ko import kar rahe hain (server banane ke liye)
const express = require("express");

// CORS import kar rahe hain (frontend ko backend se connect karne ke liye allow karta hai)
const cors = require("cors");

// dotenv ko activate kar rahe hain (.env file ke variables use karne ke liye)
require("dotenv").config();

// Express app create kar rahe hain (ye hamara main server object hai)
const app = express();

// CORS middleware use kar rahe hain (cross-origin requests allow karega)
app.use(cors());

// JSON middleware (frontend se aane wala JSON data samajhne ke liye)
app.use(express.json());

// Server ka port set kar rahe hain
// Agar .env file me PORT hai to use karega
// Nahi hai to default 5000 use karega
const PORT = process.env.PORT || 5000;

// Ek test API route bana rahe hain
// Jab koi GET request karega "/api/test" par
app.get("/api/test", (req, res) => {
  // Server response bhej raha hai JSON format me
  res.json({ message: "✅ Backend is working!" });
});

app.get("/api/done", (req, res) => {
  res.json({ message: "I am testing." });
});

// Server ko start kar rahe hain selected PORT par
app.listen(PORT, () => {
  // Console me message print karega jab server successfully start ho jaye
  console.log(`✅ Server is running on ${PORT}`);
});

// 🏗️ Real Life Example

// Socho:

// Express = Dukaan ka counter

// CORS = Gate pass

// JSON middleware = Language translator

// Route = Service counter

// Port = Shop number

// app.listen = Shop khol do
