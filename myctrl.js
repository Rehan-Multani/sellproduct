const db = require('./mymodel');

const getpaginate = async (req, res) => {
    try {
        const products = await db.find();
        await res.status(200).json(products);
    } catch (error) {
        res.status(404).json(error.message);
    }
};


const Getdata = async (req, res) => {
    try {
        const result = await db.findById({ _id: req.params.id });
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};



const Postdata = async (req, res) => {
    try {

        const newUser = await db.create(req.body);
        return res.status(201).json(newUser); // 201 for successful creation
    } catch (error) {
        return res.status(500).json({ error: "Error creating user", message: error.message });
    }
};

const Putdata = async (req, res) => {
    try {
        let result = await db.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: req.body
            })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}
const DeleteData = async (req, res) => {
    try {
        let result = await db.findOneAndDelete({ _id: req.params.id },
            {
                $set: req.body
            })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { getpaginate, Getdata, Postdata, Putdata, DeleteData };