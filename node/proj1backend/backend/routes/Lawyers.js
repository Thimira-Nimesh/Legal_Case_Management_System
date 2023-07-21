// const express = require("express");
// const router = express.Router();
// const { Lawyer } = require("../models");

// router.get("/", async (req, res) => {
//   try {
//     const listoflawyers = await Lawyer.findAll();
//     res.json(listoflawyers);
//   } catch (error) {
//     // Handle the error appropriately
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while retrieving lawyers" });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const lawyer = req.body;
//     const createdLawyer = await Lawyer.create(lawyer);
//     res.status(201).json(createdLawyer);
//   } catch (error) {
//     // Handle the validation error
//     console.error(error);
//     res
//       .status(400)
//       .json({ error: "Validation error: Please provide all required fields" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { Lawyer } = require("../models"); // Import the Lawyer model
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

// Route for lawyer registration
router.post("/register", async (req, res) => {
  const { name, address, contact, nic, email, username, password } = req.body;

  // Check if the username already exists in the database
  const existingLawyer = await Lawyer.findOne({
    where: { username: username },
  });
  if (existingLawyer) {
    return res.json({ error: "Username already exists" });
  }

  // Hash the password
  bcrypt.hash(password, 10).then(async (hash) => {
    try {
      // Create the Lawyer record in the database
      const newLawyer = await Lawyer.create({
        name: name,
        address: address,
        contact: contact,
        nic: nic,
        email: email,
        username: username,
        password: hash,
      });
      res.json("SUCCESS");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred during registration" });
    }
  });
});

// Route for lawyer login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find the lawyer by the provided username
  const lawyer = await Lawyer.findOne({ where: { username: username } });

  if (!lawyer) {
    res.json({ error: "Lawyer not found" });
    return;
  }

  // Compare the provided password with the hashed password in the database
  bcrypt.compare(password, lawyer.password).then((match) => {
    if (!match) {
      res.json({ error: "Incorrect password" });
      return;
    }

    // Generate a JWT token for authentication
    const accessToken = sign(
      { username: lawyer.username, id: lawyer.id, usertype: "lawyer" },
      "importantsecret"
    );

    res.json({ accessToken: accessToken });
  });
});

module.exports = router;
