const express = require("express");
const router = express.Router();
const { getPetByID, postPet, deletePet } = require("../controller");

router.get("/:petID/", getPetByID);

router.post("/", postPet);

router.delete("/:petID/", deletePet);

module.exports = router;
