const mongoose = require("mongoose");

const department = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    lastname:
    {
        type: String,
        required: true,
    },
    profession:
    {
        type: String,
        required: true,
    },
    email:
    {
        type: String,
        required: true,
    },
    password:
    {
        type: String,
        required: true,
    },
    confirmpassword:
    {
        type: String,
        required: true,
    },
    category:
    {
        type: String,
        required: true,
    },
    sellproduct:
    {
        type: String,
        required: true,
    }
},
{
  timestamps: true,
})
module.exports = mongoose.model("schema", department);


