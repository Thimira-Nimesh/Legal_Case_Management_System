const express = require("express");
const router = express.Router();
const { Lawyer } = require("../models");

router.get("/", async (req, res) => {
  try {
    const listoflawyers = await Lawyer.findAll();
    res.json(listoflawyers);
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving lawyers" });
  }
});

router.post("/", async (req, res) => {
  try {
    const lawyer = req.body;
    const createdLawyer = await Lawyer.create(lawyer);
    res.status(201).json(createdLawyer);
  } catch (error) {
    // Handle the validation error
    console.error(error);
    res
      .status(400)
      .json({ error: "Validation error: Please provide all required fields" });
  }
});

module.exports = router;
