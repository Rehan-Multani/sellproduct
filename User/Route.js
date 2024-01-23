const express = require("express");
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const { getpaginate, getdata, insertdata, updatedata, deletedata } =
    require('./Controller')
const uploadedImageUrl = require('../singleImgUpload')
const router = express.Router();

router.get("/", getpaginate)
router.get("/:id", getdata)
router.post("/", upload.single('image'), uploadedImageUrl, insertdata)
router.put("/:id", upload.single('image'), uploadedImageUrl, updatedata)
router.delete("/:id", deletedata)

module.exports = router;