const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage")
const router = express.Router();
const { getItems, getItem, updateItem, deleteItem, createItem } = require("../controllers/storage")


/**
 * lista de items
 */
router.get("/", getItems);
/**
 * Detalle de item
 */
router.get("/:id", validatorGetItem, getItem);
/**
 * Eliminar item
 */
router.delete("/:id", validatorGetItem, deleteItem);
/**
 * Crear item
 */
router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;