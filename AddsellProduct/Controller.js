const db = require("./Model");
const asyncHandler = require("express-async-handler");

const getpaginate = asyncHandler(async (req, res) => {
    try {
        const data = await db.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

const getdata = asyncHandler(async (req, res) => {
    try {
        const data = await db.findOne({ _id: req.params.id });
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

const insertdata = asyncHandler(async (req, res) => {
    try {
        const { password, confirmPassword } = req.body;
        const data1 = await db.findOne({ email: req.body.email });
        const data2 = await db.findOne({ comanyEmail: req.body.comanyEmail });
        const data3 = await db.findOne({ mobile: req.body.mobile });

        if (password !== confirmPassword) {
            res.status(400).json({ message: "Passwords do not match" });
        } else if (data1) {
            res.status(400).json({ message: "Email already exists" });
        } else if (data2) {
            res.status(400).json({ message: "Company email already exists" });
        } else if (data3) {
            res.status(400).json({ message: "Please select a different mobile number" });
        } else {
            const img = req.uploadedImageUrl;
            const data = await db.create({
                image: img,
                ...req.body,
            });
            res.status(201).json(data);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const updatedata = asyncHandler(async (req, res) => {
    try {
        const img = req.uploadedImageUrl;
        const result = await db.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    image: img,
                    ...req.body,
                },
            }
        );
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const deletedata = asyncHandler(async (req, res) => {
    try {
        const result = await db.deleteOne({ _id: req.params.id });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = { getpaginate, getdata, insertdata, updatedata, deletedata };
