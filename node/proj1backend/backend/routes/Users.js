// const express = require("express");
// const router = express.Router();
// const { Users } = require("../models");
// const bcrypt = require("bcrypt");
// const { sign } = require("jsonwebtoken");

// router.post("/", async (req, res) => {
//   const { name, address, contact, nic, email, username, password } = req.body;
//   bcrypt.hash(password, 10).then((hash) => {
//     Users.create({
//       name: name,
//       address: address,
//       contact: contact,
//       nic: nic,
//       email: email,
//       username: username,
//       password: hash,
//     });
//     res.json("SUCCESS");
//   });
// });

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   const user = await Users.findOne({ where: { username: username } });

//   if (!user) {
//     res.json({ error: "User Doesn't Exist" });
//     return;
//   }

//   bcrypt.compare(password, user.password).then((match) => {
//     if (!match) {
//       res.json({ error: "Wrong Username and Password" });
//       return;
//     }

//     const accessToken = sign(
//       { username: user.username, id: user.id },
//       "importantsecret"
//     );
//     res.json({ accessToken: accessToken });
//   });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/AuthMiddleware");

router.post("/", async (req, res) => {
  const { name, address, contact, nic, email, username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      name: name,
      address: address,
      contact: contact,
      nic: nic,
      email: email,
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
      { username: user.username, id: user.id },
      "importantsecret"
    );

    // Send the access token in the response
    res.json({ accessToken: accessToken });
  });
});

router.get("/auth2", validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
