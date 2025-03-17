const User = require("../models/User");
const Match = require("../models/Match");

exports.matchUser = async (req, res) => {
  try {
    const { userId, targetUserId } = req.body;
    const existingMatch = await Match.findOne({ user1: userId, user2: targetUserId });

    if (existingMatch) {
      return res.status(400).json({ message: "Already matched" });
    }

    const newMatch = new Match({ user1: userId, user2: targetUserId });
    await newMatch.save();
    res.json({ message: "Matched successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
