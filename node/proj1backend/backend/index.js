const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers

const clientRouter = require("./routes/Clients");
app.use("/clients", clientRouter);

const lawyerRouter = require("./routes/Lawyers");
app.use("/lawyers", lawyerRouter);

const caseRouter = require("./routes/Cases");
app.use("/cases", caseRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
