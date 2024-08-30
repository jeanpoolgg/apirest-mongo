const express = require("express");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");
const {loginController} = require("../controllers/auth")

router.post("/register", validatorRegister, loginController);

module.exports = router;