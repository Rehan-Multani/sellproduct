const mongoose = require("mongoose");

const { Schema } = mongoose;

const data = Schema(
    {
        orderno: {
            type: String,
            required: false,
        },
        orderdate: {
            type: String,
            required: true,
        },
        partyaccount: {
            type: String,
            required: true,
        },
        purchasesalesLedger: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        newproduct: [
            // {
            //     _id: {
            //         type: Schema.Types.ObjectId,
            //         default: () => new mongoose.Types.ObjectId()
            //     },
            //     duedate: {
            //         type: String,
            //     },
            //     productname: {
            //         type: String,
            //     },
            //     quantity: {
            //         type: String,
            //     },
            //     price: {
            //         type: String,
            //     },
            //     warehouse: {
            //         type: String,
            //     },
            //     discount: { 
            //         type: String,
            //     },
            //     tax: {
            //         type: String,
            //     },
            //     amount: {
            //         type: String,
            //     },
            // },
        ],
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("purchaseorder", data);
