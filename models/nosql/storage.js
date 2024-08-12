const mongoose = require("mongoose")

const StoreScheme = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: Number
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("storages", StoreScheme)