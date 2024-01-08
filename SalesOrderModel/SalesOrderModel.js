const mongoose = require("mongoose");

const data = mongoose.Schema({
  orderno: {
    type: String,
    required: true,
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
  productname: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  allorder: []
},
  {
    timestamps: true,
  });
module.exports = mongoose.model("saleord", data);


// {
//   "OrderDate": "dvhd",
//      "PartyAccount": "ujhcj",
//      "PurchaseSalesLedger": "jcj",
//      "Notes": "dfeuihf",
// "Status":"grtgr"
//      "AllOrder":[
//          {"ProductName":"pizza","Quantity":"1054","Price":"256781","Amount":"200"}
//      ]
// }