const express = require("express");
const { addNewJob } = require("../controller/jobsController");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'images/')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
  })
  
  const upload = multer({ storage: storage })
  
router.route("/job/new").post( upload.single('selectedFile.data') , addNewJob);

module.exports = router;
