const express = require("express");
const router = express.Router();
const { getItems, createItem, getItem, updateItem, deleteItem} = require("../controllers/tracks");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");

/**
 * Lis los items
 */
router.get("/", getItems);

/**
 * Obtener un detalle de item
 */
router.get("/:id", validatorGetItem,  getItem);

/**
 * Crea un registro
 */
router.post("/", validatorCreateItem, customHeader, createItem);

/**
 * Actualizar un registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Eliminar un registro
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;