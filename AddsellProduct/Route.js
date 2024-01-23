const express = require("express");
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const { getpaginate, insertdata, updatedata, deletedata, getdata } =
    require('./Controller')
const uploadedImageUrl = require('../Middewares/singleImgUpload')
const router = express.Router();

router.get("/", getpaginate)
router.get("/:id", getdata)
router.post("/", upload.single('image'), uploadedImageUrl, insertdata)
router.put("/:id", upload.single('image'), uploadedImageUrl, updatedata)
router.delete("/:id", deletedata)

module.exports = router;