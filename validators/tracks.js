const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
    check("name").exists().notEmpty().isLength({min: 5, max: 90}),
    check("album").exists().notEmpty().isLength({min: 5, max: 90}),
    check("cover").exists().notEmpty().isLength({min: 5, max: 90}),
    check("artist.name").exists().notEmpty().isLength({min: 5, max: 90}),
    check("artist.nickname").exists().notEmpty().isLength({min: 5, max: 90}),
    check("artist.nationality").exists().notEmpty().isLength({min: 5, max: 90}),
    check("duration.start").exists().notEmpty().isLength({min: 5, max: 90}),
    check("duration.end").exists().notEmpty().isLength({min: 5, max: 90}),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, mext)
    }
];

module.exports = {validatorCreateItem}