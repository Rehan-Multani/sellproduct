const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;


const cors = require("cors");

dbConnect();
app.use(cors());
app.use(bodyParser.json());


app.use("/api", require("./route"));

app.listen(PORT, () => {
  console.log(
    `Hritik bhai no Tention Your Server is running  at PORT ${PORT} 🦍🦍🦍`
  );
});