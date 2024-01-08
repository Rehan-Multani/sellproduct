const db = require('./PurchaseOrderModel');
const asyncHandler = require("express-async-handler");


const getpaginate = async (req, res) => {
    try {
        const products = await db.find()
        await res.status(200).json(products);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const getdata = asyncHandler(async (req, res) => {
    try {
        data = await db.find({ _id: req.params._id })
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json(error.message);
    }
})

// const insertdata = async (req, res) => {
//     try {
//         const { OrderDate, PartyAccount, PurchaseSalesLedger, Notes, Status, newProduct }
//             = req.body;

//         const productsWithAmounts = newProduct.map(item => ({
//             ...item,
//             total: (item.price * item.quantity) - item.discount + item.tax
//         }));

//         const count = await db.countDocuments();
//         const generatedID = `ORDER${(count + 1).toString().padStart(4, '0')}`;

//         const data = new db({
//             OrderNo: generatedID,
//             OrderDate,
//             PartyAccount,
//             PurchaseSalesLedger,
//             Notes,
//             Status,
//             newProduct: productsWithAmounts
//         });

//         const result = await data.save();
//         res.json(result);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// };

const insertdata = async (req, res) => {
    try {
        const count = await db.countDocuments();
        const generatedID = `ORDER${(count + 1).toString().padStart(4, '0')}`;

        const data = new db({
            orderno: generatedID,
            ...req.body
        });

        const result = await data.save();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
// const updatedata = asyncHandler(async (req, res) => {

//     try {
//         const { OrderDate, PartyAccount, PurchaseSalesLedger, Notes, Status, newProduct } = req.body;

//         const productsWithAmounts = newProduct.map(item => ({
//             ...item,
//             total: (item.price * item.quantity) - item.discount + item.tax
//         }));

//         let result = await db.updateOne(
//             { _id: req.params._id },
//             {
//                 $set: {
//                     OrderDate,
//                     PartyAccount,
//                     PurchaseSalesLedger,
//                     Notes,
//                     Status,
//                     newProduct: productsWithAmounts
//                 }
//             }
//         )
//         res.status(200).json(result);
//     } catch (error) {
//         res.status(404).json(error.message)
//     }
// })

const updatedata = asyncHandler(async (req, res) => {

    try {

        let result = await db.updateOne(
            { _id: req.params._id },
            {
                $set: req.body
            }
        )
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
})
const deletedata = asyncHandler(async (req, res) => {

    try {
        let result = await db.deleteOne({ _id: req.params.id },
            {
                $set: req.body
            })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
})

module.exports = { getpaginate, getdata, insertdata, updatedata, deletedata };
