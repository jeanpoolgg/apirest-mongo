const fs = require("fs");
const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({});
        res.send({data});
    } catch (e){
        handleHttpError(res, "ERROR_LIST_ITEMS");
    }
}
/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await storageModel.findById({_id: id});
        res.send({data});
    } catch (e){
        console.log(e);
        handleHttpError(res, "ERROR_DETAIL_ITEM");
    }
}

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const {file} = req
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await storageModel.create(fileData)
        res.status(201);
        res.send({data})
    } catch(e) {
        handleHttpError(res, "ERROR_CREATE_ITEM");
    }
}
/**
 *  Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {}

/**
 *  Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const dataFile = await storageModel.findById({_id: id});
        await storageModel.delete({_id: id})
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;
        fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleted: 1
        }
        res.send({data});
    } catch (e){
        console.log(e);
        handleHttpError(res, "ERROR_DETAIL_ITEM");
    }
}





module.exports = {getItems, getItem, createItem, updateItem, deleteItem}