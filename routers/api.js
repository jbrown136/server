const express = require("express");
const router = express.Router();
const ownersRouter = require("./owners");
const petsRouter = require("./pets");
const { welcome } = require("../controller");

router.get("/", welcome);
router.use("/owners", ownersRouter);
router.use("/pets", petsRouter);

module.exports = router;
