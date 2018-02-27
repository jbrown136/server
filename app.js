const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const {
  welcome,
  getAllOwners,
  getOwnerByID,
  getOwnersPets,
  getPetByID,
  patchOwner,
  postOwner
} = require("./controller.js");

app.use(bodyParser.json());

app.get("/api/", welcome);
app.get("/api/owners/", getAllOwners);
app.get("/api/owners/:ownerID", getOwnerByID);
app.get("/api/owners/:ownerID/pets", getOwnersPets);
app.get("/api/pets/:petID", getPetByID);

app.patch("/api/owners/:ownerID", patchOwner);

app.post("/api/owners/", postOwner);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
