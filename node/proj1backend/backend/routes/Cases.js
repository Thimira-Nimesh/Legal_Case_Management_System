const express = require("express");
const router = express.Router();
const { Case, Noted } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

router.get("/", validateToken, async (req, res) => {
  try {
    const listofcases = await Case.findAll({ include: [Noted] });
    res.json(listofcases);
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving clients" });
  }
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const lawcase = await Case.findByPk(id);
  res.json(lawcase);
});

router.post("/", async (req, res) => {
  try {
    const cases = req.body;
    const createdCase = await Case.create(cases);
    res.status(201).json(createdCase);
  } catch (error) {
    // Handle the validation error
    console.error(error);
    res
      .status(400)
      .json({ error: "Validation error: Please provide all required fields" });
  }
});

module.exports = router;
