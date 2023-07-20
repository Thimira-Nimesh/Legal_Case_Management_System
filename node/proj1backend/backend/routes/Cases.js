const express = require("express");
const router = express.Router();
const { Case, Noted } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

router.get("/", async (req, res) => {
  try {
    const listofcases = await Case.findAll({});
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

//------

router.get("/byUserId/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    // Use Sequelize to find all cases associated with the specified user ID
    const casesByUserId = await Case.findAll({
      where: {
        UserId: userId,
      },
    });

    res.json(casesByUserId);
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving cases" });
  }
});

module.exports = router;
