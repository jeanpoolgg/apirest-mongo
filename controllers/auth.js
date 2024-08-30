const {matchedData} = require("express-validator");
const {encrypt, compare} = require("../utils/handlePassword");
const {tokenSign} = require("../utils/handleJwt");
const {handleHttpError} = require("../utils/handleError");
const {usersModel} = require("../models")

/**
 * Este controllador es el encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerController = async (req,res) => {
    try{
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = {...req, password};
        const dataUser = await usersModel.create(body);
        dataUser.set("password", undefined, {strict: false});

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_REGISTER_USER");
    }
}

const loginController = async (req, res) => {
    try{
        req = matchedData(req);
        const user = await usersModel.findOne({email: req.email}).select('password name role email');
        if(!user) {
            handleHttpError(res, "USER_NOT_EXISTS", 404);
            return
        }

        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword);

        if(!check) {
            handleHttpError(res, "PASSWORD_INVALID", 401);
            return
        }

        user.set('password', undefined, {strict:false})
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send({data})
    }catch(e){
        handleHttpError(res, "ERROR_LOGIN_USER")
    }
}

module.exports = {registerController, loginController}