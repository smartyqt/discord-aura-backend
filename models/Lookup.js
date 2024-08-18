const mongoose = require("mongoose");

const lookupSchema = new mongoose.Schema({
  userID: String,
  username: String,
  joinDateScore: Number,
  usernameScore: Number,
  profileMatchScore: Number,
  statusScore: Number,
  totalAuraScore: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lookup", lookupSchema);
