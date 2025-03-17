const express = require("express");
const { matchUser } = require("../controllers/matchController");
const router = express.Router();

router.post("/match", matchUser);

module.exports = router;
