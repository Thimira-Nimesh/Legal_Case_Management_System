const express = require("express");
const router = express.Router();
const { Noted } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

router.post("/", validateToken, async (req, res) => {
  const { CaseId } = req.body;
  const UserId = req.user.id;

  const found = await Noted.findOne({
    where: { CaseId: CaseId, Userid: UserId },
  });

  if (!found) {
    await Noted.create({ CaseId: CaseId, UserId: UserId });
    res.json("Noted the case");
  } else {
    await Noted.destroy({
      where: { CaseId: CaseId, UserId: UserId },
    });
    res.json("Haven't Noted the case");
  }
});

module.exports = router;
