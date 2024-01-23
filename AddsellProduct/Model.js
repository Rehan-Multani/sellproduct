const mongoose = require("mongoose");

const data = mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
    confirmPassword: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true,

    },
    profession: {
        type: String,
        required: true,

    },
    country: {
        type: String,
        required: true,

    },
    zipcode: {
        type: String,
        required: true,

    },
    state: {
        type: String,
        required: true,

    },
    currencyOnDeal: {
        type: String,
        required: true,

    },
    confirmPassword: {
        type: String,
        required: true,

    },
    mobile: {
        type: String,
        required: true,

    },
    sellProduct: {
        type: String,
        required: true,

    },
    comapanyName: {
        type: String,
        required: true,

    },
    currencyOnDeal: {
        type: String,
        required: true,

    },
    dateOfBirth: {
        type: String,
        required: true,

    },
    comanyEmail: {
        type: String,
        required: true,

    },
},
    {
        timestamps: true,
    })
module.exports = mongoose.model("sellproduct", data);

