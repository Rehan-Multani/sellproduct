const express = require("express");
const { getpaginate,getdata, insertdata, updatedata , deletedata} = 
require('../SalesOrderController/SalesOrderCtrl')

const router = express.Router();

router.get("/", getpaginate);
router.get("/:_id", getdata);
router.post("/", insertdata)
router.put("/:id", updatedata)
router.delete("/:id", deletedata)

module.exports = router;