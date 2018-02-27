const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const apiRouter = require("./routers/api");

app.use(bodyParser.json());

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
