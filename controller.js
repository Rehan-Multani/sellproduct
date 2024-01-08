const db = require('./model');

const getpaginate = async (req, res) => {
    try {
        const products = await db.find(req.body);
        await res.status(200).json(products);
    } catch (error) {
        res.status(404).json(error.message);
    }
};


const Getdata = async (req, res) => {
    try {
        const result = await db.find({ _id: req.params.id })
        res.status(200).send(result)
    } catch (error) {
        res.status(404).json(error.message)

    }
}

const Postdata = async (req, res) => {
    try {
      const existingUser = await db.findOne({ email: req.body.email });
  
      if (existingUser) {
        return res.status(409).json({ error: "Email already exists" });
      }
  
      if (req.body.password !== req.body.confirmpassword) {
        return res.status(400).json({ error: "Passwords do not match" });
      }
  
      // Additional validation steps could go here...
  
      const newUser = await db.create(req.body);
      return res.status(201).json(newUser); // 201 for successful creation
    } catch (error) {
      return res.status(500).json({ error: "Error creating user", message: error.message });
    }
  };
  
const Putdata = async (req, res) => {
    try {
        let result = await db.updateMany(
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
        let result = await db.deleteMany({ _id: req.params.id },
            {
                $set: req.body
            })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { getpaginate, Getdata, Postdata, Putdata, DeleteData };