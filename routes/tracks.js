const express = require("express");
const router = express.Router();
const { getItems, createItem} = require("../controllers/tracks");
const { validatorCreateItem } = require("../validators/tracks");


router.get("/", getItems)
router.post("/", validatorCreateItem ,createItem)

module.exports = router