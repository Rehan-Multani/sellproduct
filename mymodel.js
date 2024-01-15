const mongoose = require("mongoose");

const department = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    costPrice:
    {
        type: String,
        required: true,
    },
    sellPrice:
    {
        type: String,
        required: true,
    },
    brand:
    {
        type: String,
        required: true,
    },
    category:
    {
        type: String,
        required: true,
    },

},
    {
        timestamps: true,
    })
module.exports = mongoose.model("products", department);


