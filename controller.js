const owners = require("./models/owners");
const pets = require("./models/pets");
function welcome(req, res) {
  res.status(200).send("Welcome to our API");
}

function getAllOwners(req, res) {
  owners.fetchAll((err, data) => {
    res.status(200).send(data);
  });
}

function getOwnerByID(req, res) {
  owners.fetchById(req.params.ownerID, (err, data) => {
    res.status(200).send(data);
  });
}

function getOwnersPets(req, res) {
  pets.fetchByOwnerId(req.params.ownerID, (err, data) => {
    if (data.length === 0)
      res.status(404).send(`No pets found for ${req.params.ownerID}`);
    else res.status(200).send(data);
  });
}

function getPetByID(req, res) {
  pets.fetchById(req.params.petID, (err, data) => {
    res.status(200).send(data);
  });
}

module.exports = {
  welcome,
  getAllOwners,
  getOwnerByID,
  getOwnersPets,
  getPetByID
};
