const mongoose = require("mongoose");


// add new job => api/v1/job/new
exports.addNewJobs = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id;
    const job = await Job.create(req.body);
  
    res.status(200).json({
      success: true,
      message: "job created!",
      data: job,
    });
  });