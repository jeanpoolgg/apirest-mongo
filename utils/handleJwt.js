const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h",
        }
    );

    return sign;
}


/**
 * Debes de pasar el token de session el JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) =>{
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch(e) {
        return null
    }
}

module.exports = { tokenSign, verifyToken };