const express = require("express");
const router = express.Router();
const { Case } = require("../models");

router.get("/", async (req, res) => {
  try {
    const listofcases = await Case.findAll();
    res.json(listofcases);
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving clients" });
  }
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
