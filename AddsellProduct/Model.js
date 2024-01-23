const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

data.pre("save", async function (next) {
    const user = this;

    // Hash the password and confirmPassword if they are present and modified
    if ((user.isModified("password") || user.isModified("confirmPassword")) && user.password && user.confirmPassword) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        user.confirmPassword = await bcrypt.hash(user.confirmPassword, salt);
    }

    next();
});

module.exports = mongoose.model("sellproduct", data);


