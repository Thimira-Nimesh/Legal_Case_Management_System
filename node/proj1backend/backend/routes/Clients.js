const express = require("express");
const router = express.Router();
const { Client } = require("../models");

router.get("/", async (req, res) => {
  try {
    const listofclients = await Client.findAll();
    res.json(listofclients);
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
    const client = req.body;
    const createdClient = await Client.create(client);
    res.status(201).json(createdClient);
  } catch (error) {
    // Handle the validation error
    console.error(error);
    res
      .status(400)
      .json({ error: "Validation error: Please provide all required fields" });
  }
});

module.exports = router;
