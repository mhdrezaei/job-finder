const express = require("express");
const { addNewJob , getAllJob } = require("../controller/jobsController");
const router = express.Router();

  
router.route("/job/new").post(addNewJob);
router.route("/alljobs").get(getAllJob);

module.exports = router;
