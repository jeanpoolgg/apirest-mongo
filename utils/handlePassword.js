const bcryptjs = require("bcryptjs")

/**
 * Contraseña sin encriptar: hola.01
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);
    return hash;
}

/**
 * Pasar contraseña sin encriptar y pasar contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = (passwordPlain, hashPassword) => {

}

module.exports = { encrypt, compare}