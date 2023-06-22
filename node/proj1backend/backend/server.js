const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clientsignup",
});

app.post("/clientform", (req, res) => {
  const sql =
    "INSERT INTO clientlogin (`First Name`,`Last Name`,`Address`,`NIC`,`Email`,`Password`) VALUES (?)";
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.address,
    req.body.nic,
    req.body.email,
    req.body.password,
  ];
  //   db.query(sql, [values], (err, data) => {
  //     if (err) {
  //       return res.json("Error");
  //     }
  //     return res.json(data);
  //   });

  //   const token = jwt.sign({ email: req.body.email }, "user-info", {
  //     expiresIn: "1h",
  //   }); ////////
  //   res.json({ token });
  // });

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }

    const token = jwt.sign({ email: req.body.email }, "user-info", {
      expiresIn: "1h",
    });

    return res.json({ token });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM clientlogin WHERE `email` = ? AND `password` = ? ";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      const token = jwt.sign(
        { email: req.body.email, username: data },
        "client-login",
        {
          expiresIn: "1h",
        }
      );
      return res.json({ status: "Success", token: token });
    } else {
      return res.json("Failed");
    }
  });
});

const db2 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lawyersignup",
});

app.post("/lawyerform", (req, res) => {
  const sql =
    "INSERT INTO lawyerlogin (`First Name`,`Last Name`,`Address`,`NIC`,`Lawyer Number`,`Email`,`Password`) VALUES (?)";
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.address,
    req.body.nic,
    req.body.lawyernum,
    req.body.email,
    req.body.password,
  ];
  db2.query(sql, [values], (err, data) => {
    if (err) {
      res.json({ error: "Error" });
    } else {
      res.json(data);
    }
  });
  const token = jwt.sign({ email: req.body.email }, "lawyer-info", {
    expiresIn: "1h",
  }); ////////
  res.json({ token });
});

app.post("/lawyerlogin", (req, res) => {
  const sql = "SELECT * FROM lawyerlogin WHERE `email` = ? AND `password` = ? ";

  db2.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      const token = jwt.sign({ email: req.body.email }, "lawyer-login", {
        expiresIn: "1h",
      });
      return res.json({ status: "Success", token: token });
    } else {
      return res.json("Failed");
    }
  });
});

const db3 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "judgesignup",
});

app.post("/judgeform", (req, res) => {
  const sql =
    "INSERT INTO judgelogin (`First Name`,`Last Name`,`Address`,`NIC`,`Judge Number`,`Email`,`Password`) VALUES (?)";
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.address,
    req.body.nic,
    req.body.judgenum,
    req.body.email,
    req.body.password,
  ];
  db3.query(sql, [values], (err, data) => {
    if (err) {
      return res.json(console.log(err));
    }
    return res.json(data);
  });
});

app.post("/judgelogin", (req, res) => {
  const sql = "SELECT * FROM judgelogin WHERE `email` = ? AND `password` = ? ";

  db3.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});

app.listen(8081, () => {
  console.log("listening");
});
