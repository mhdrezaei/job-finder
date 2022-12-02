const express = require("express");
const { addNewJobs } = require("../controller/jobsController");
const router = express.Router();

router.route("/job/new").post(addNewJob);

module.exports = router;
