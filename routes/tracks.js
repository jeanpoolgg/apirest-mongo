const express = require("express");
const router = express.Router();
const { getItems, createItem, getItem, updateItem, deleteItem} = require("../controllers/tracks");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");

/**
 * Lis los items
 */
router.get("/", authMiddleware, getItems);

/**
 * Obtener un detalle de item
 */
router.get("/:id", authMiddleware, validatorGetItem,  getItem);

/**
 * Crea un registro
 */
router.post("/", authMiddleware, checkRol(["admin"]), validatorCreateItem, createItem);

/**
 * Actualizar un registro
 */
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);

/**
 * Eliminar un registro
 */
router.delete("/:id",authMiddleware, validatorGetItem, deleteItem);

module.exports = router;