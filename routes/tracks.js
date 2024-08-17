const express = require("express");
const router = express.Router();
const { getItems, createItem} = require("../controllers/tracks");
const { validatorCreateItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader")


router.get("/", getItems)
router.post("/", validatorCreateItem, customHeader, createItem)

module.exports = router