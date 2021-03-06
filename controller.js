const owners = require("./models/owners");
const pets = require("./models/pets");

function welcome(req, res) {
  res.status(200).send("Welcome to our API");
}

function getAllOwners(req, res, next) {
  owners.fetchAll((err, data) => {
    if (err) next(err);
    res.status(200).send(data);
  });
}

function getOwnerByID(req, res, next) {
  owners.fetchById(req.params.ownerID, (err, data) => {
    if (err) next({ message: `${req.params.ownerID} does not exist`, status: 418 });
    
    res.status(200).send(data);
  });
}

function getOwnersPets(req, res, next) {
  pets.fetchByOwnerId(req.params.ownerID, (err, data) => {
    if(err) next({ message: `No pets found for ${req.params.ownerID}`, status: 418 });
    // if (data.length === 0)
    //   res.status(404).send(`No pets found for ${req.params.ownerID}`);
    else res.status(200).send(data);
  });
}

function getPetByID(req, res) {
  pets.fetchById(req.params.petID, (err, data) => {
    res.status(200).send(data);
  });
}

function patchOwner(req, res) {
  owners.update(req.params.ownerID, req.body, () => {
    res.status(200).send(`${req.params.ownerID} has been updated!`);
  });
}

function postOwner(req, res) {
  req.body.id = Date.now();
  if (req.body.name === undefined || req.body.age === undefined) {
    res.status(418).send("Owner requires both name and age");
  } else {
    owners.create(req.body, err => {
      res.status(200).send("An owner has been created!");
    });
  }
}

function postPet(req, res) {
  if (
    !req.body.name ||
    !req.body.avatarUrl ||
    !req.body.favouriteFood ||
    !req.body.owner
  ) {
    res
      .status(418)
      .send("Pets require name, avatarUrl, favouriteFood and an owner");
  } else {
    req.body.id = Date.now();
    pets.create(req.body.owner, req.body, (err, data) => {
      res.status(200).send(data);
    });
  }
}

function deletePet(req, res) {
  pets.deleteById(req.params.petID, (err, data) => {
    res.status(200).send(data);
  });
}

function deleteOwner(req, res) {
  owners.deleteById(req.params.ownerID, (err, data) => {
    res.status(200).send(data);
  });
}
module.exports = {
  welcome,
  getAllOwners,
  getOwnerByID,
  getOwnersPets,
  getPetByID,
  patchOwner,
  postOwner,
  postPet,
  deletePet,
  deleteOwner
};
