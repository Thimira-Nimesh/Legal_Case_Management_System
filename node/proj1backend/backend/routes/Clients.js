// const express = require("express");
// const router = express.Router();
// const { Client } = require("../models");

// router.get("/", async (req, res) => {
//   try {
//     const listofclients = await Client.findAll();
//     res.json(listofclients);
//   } catch (error) {
//     // Handle the error appropriately
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while retrieving clients" });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const client = req.body;
//     const createdClient = await Client.create(client);
//     res.status(201).json(createdClient);
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
const { Client } = require("../models"); // Import the Client model
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

// Route for client registration
router.post("/register", async (req, res) => {
  const { name, address, contact, nic, email, username, password } = req.body;

  // Check if the username already exists in the database
  const existingClient = await Client.findOne({
    where: { username: username },
  });
  if (existingClient) {
    return res.json({ error: "Username already exists" });
  }

  // Hash the password
  bcrypt.hash(password, 10).then(async (hash) => {
    try {
      // Create the Client record in the database
      const newClient = await Client.create({
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
  const client = await Client.findOne({ where: { username: username } });

  if (!client) {
    res.json({ error: "Client not found" });
    return;
  }

  // Compare the provided password with the hashed password in the database
  bcrypt.compare(password, client.password).then((match) => {
    if (!match) {
      res.json({ error: "Incorrect password" });
      return;
    }

    // Generate a JWT token for authentication
    const accessToken = sign(
      { username: client.username, id: client.id, usertype: "client" },
      "importantsecret"
    );

    res.json({ accessToken: accessToken });
  });
});

module.exports = router;
