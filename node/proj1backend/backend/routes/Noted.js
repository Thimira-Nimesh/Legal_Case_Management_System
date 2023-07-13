const express = require("express");
const router = express.Router();
const { Noted } = require("../models");
// const {validateToken} = require("../middleware/AuthMiddleware")

const { validateToken } = require("../middleware/AuthMiddleware");

router.post("/", validateToken, async (req, res) => {
  const { CaseId } = req.body;
  const UserId = req.user.id;

  await Noted.create({ CaseId: CaseId, UserId: UserId });
  res.json("Success");
});

module.exports = router;
