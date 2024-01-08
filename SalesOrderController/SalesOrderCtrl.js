const db = require('../SalesOrderModel/SalesOrderModel');
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
        res.status(404).json("Your requested could not be found");
    }
})

const insertdata = asyncHandler(async (req, res) => {


    const count = await db.countDocuments();
    const generatedID = `ORDER${(count + 1).toString().padStart(4, '0')}`;

    try {

        const result = await db.create(
            {
                orderno:generatedID,
                ...req.body
            }
        );
        res.status(201).json(result);

    } catch (error) {
        console.log(error);
        res.status(404).send("Your requested could not be found");
    }
});

const updatedata = asyncHandler(async (req, res) => {

    try {

        let result = await db.updateOne(
            { _id: req.params.id },

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
        res.status(404).json("Your requested could not be found")
    }
})
module.exports = { getpaginate, getdata, insertdata, updatedata, deletedata };
