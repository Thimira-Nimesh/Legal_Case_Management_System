const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/AuthMiddleware");

router.post("/", async (req, res) => {
  const { name, address, contact, nic, email, username, password, usertype } =
    req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      name: name,
      address: address,
      contact: contact,
      nic: nic,
      email: email,
      usertype: usertype,
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) {
    res.json({ error: "User Doesn't Exist" });
    return;
  }

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      res.json({ error: "Wrong Username and Password" });
      return;
    }

    const accessToken = sign(
      { username: user.username, id: user.id, usertype: user.usertype },
      "importantsecret"
    );

    res.json({ accessToken: accessToken });
  });
});

router.get("/auth2", (req, res) => {
  res.json(req.user);
  const username = req.user.username;
});

router.get("/basicinfo/id", async (req, res) => {
  const id = req.params.id;

  const basicinfo = await Users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });

  res.json(basicinfo);
});

router.get("/a", async (req, res) => {
  try {
    const listofUsers = await Users.findAll();
    res.json(listofUsers);
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving lawyers" });
  }
});

module.exports = router;
