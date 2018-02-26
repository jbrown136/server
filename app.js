const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { welcome, getAllOwners, getOwnerByID, getOwnersPets } = require("./controller.js");

app.use(bodyParser.json());
app.get("/api/", welcome);
app.get("/api/owners/", getAllOwners);
app.get("/api/owners/:ownerID", getOwnerByID);
app.get("/api/owners/:ownerID/pets", getOwnersPets)

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
