const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { welcome, getAllOwners, getOwnerByID } = require("./controller.js");

app.use(bodyParser.json());
app.get("/api/", welcome);
app.get("/api/owners/", getAllOwners);
app.get("/api/owners/:ownerID", getOwnerByID);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
