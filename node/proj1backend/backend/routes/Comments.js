const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

router.get("/:caseId", async (req, res) => {
  const caseId = req.params.caseId;
  const lawcomments = await Comments.findAll({ where: { CaseId: caseId } });
  res.json(lawcomments);
});

router.post("/", async (req, res) => {
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

module.exports = router;
