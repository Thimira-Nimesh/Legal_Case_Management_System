const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers

// const clientRouter = require("./routes/Clients");
// app.use("/clients", clientRouter);

// const lawyerRouter = require("./routes/Lawyers");
// app.use("/lawyers", lawyerRouter);

const caseRouter = require("./routes/Cases");
app.use("/cases", caseRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const notedRouter = require("./routes/Noted");
app.use("/noted", notedRouter);

// const adminAuthRouter = require("./routes/Admin");
// app.use("/admin/auth", adminAuthRouter);

// const lawyerAuthRouter = require("./routes/Lawyers");
// app.use("/lawyer/auth", lawyerAuthRouter);

// const clientAuthRouter = require("./routes/Clients");
// app.use("/client/auth", clientAuthRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
