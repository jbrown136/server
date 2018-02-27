const express = require("express");
const router = express.Router();
const {
  getAllOwners,
  getOwnerByID,
  getOwnersPets,
  patchOwner,
  postOwner,
  deleteOwner
} = require("../controller");

router.get("/", getAllOwners);
router.get("/:ownerID", getOwnerByID);
router.get("/:ownerID/pets", getOwnersPets);

router.patch("/:ownerID", patchOwner);

router.post("/", postOwner);

router.delete("/:ownerID", deleteOwner);

module.exports = router;
