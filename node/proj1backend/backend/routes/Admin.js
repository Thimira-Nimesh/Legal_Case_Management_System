const express = require("express");
const router = express.Router();
const { Admin } = require("../models"); // Import the Client model
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

// Route for client registration
router.post("/register", async (req, res) => {
  const { name, address, contact, nic, email, username, password } = req.body;

  // Check if the username already exists in the database
  const existingAdmin = await Admin.findOne({
    where: { username: username },
  });
  if (existingAdmin) {
    return res.json({ error: "Username already exists" });
  }

  // Hash the password
  bcrypt.hash(password, 10).then(async (hash) => {
    try {
      // Create the Client record in the database
      const newAdmin = await Admin.create({
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

// Route for client login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find the client by the provided username
  const admin = await Admin.findOne({ where: { username: username } });

  if (!admin) {
    res.json({ error: "Admin not found" });
    return;
  }

  // Compare the provided password with the hashed password in the database
  bcrypt.compare(password, admin.password).then((match) => {
    if (!match) {
      res.json({ error: "Incorrect password" });
      return;
    }

    // Generate a JWT token for authentication
    const accessToken = sign(
      { username: admin.username, id: admin.id, usertype: "admin" },
      "importantsecret"
    );

    res.json({ accessToken: accessToken });
  });
});

module.exports = router;
