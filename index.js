const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const dbConnect = require("./config");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://pawaryash2411:fQC1Ke7MtfYWUByG@cluster0.nxrjp4d.mongodb.net/Barcode", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Failed to connect to MongoDB", err);
});

// Barcode Schema and Model
const BarcodeSchema = new mongoose.Schema({
  productName: String,
  price: String,
  quantity: String,
  tax: String,
  description: String,
  productId: String,
  date: { type: Date, default: Date.now },
});

const Barcode = mongoose.model("Barcode", BarcodeSchema);

// Routes
app.post("/generate", async (req, res) => {
  try {
    const barcode = await Barcode.create(req.body);
    res.status(201).send(barcode);
  } catch (error) {
    res.status(500).send({ message: "Error creating barcode", error });
  }
});

app.get("/generate", async (req, res) => {
  try {
    const barcodes = await Barcode.find();
    res.status(200).send(barcodes);
  } catch (error) {
    res.status(500).send({ message: "Error fetching barcodes", error });
  }
});

// Additional Routes
app.use("/api/adduser", require("./route"));
app.use("/api/salesorder", require("./SalesOrderRoute/SalesOrderRoute"));
app.use("/api/purchaseorder", require("./PurchaseOrderRoute"));
app.use("/api/products", require("./myroute"));
app.use("/api/sellproduct", require("./AddsellProduct/Route"));
app.use("/api/user", require("./User/Route"));

// Start server
app.listen(PORT, () => {
  console.log(`Your Server is running at PORT ${PORT}`);
});
