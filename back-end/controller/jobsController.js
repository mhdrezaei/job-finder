const mongoose = require("mongoose");
const Job = require("../models/jobs");
const ErrorHandler = require("../utils/errorHandler");

const catchAsyncErrors = require("../middlewares/catchAsyncErrors");



// add new job => api/v1/job/new
exports.addNewJob = catchAsyncErrors(async (req, res, next) => {
//   req.body.user = req.user.id;
console.log(req.body)
  const job = await Job.create(req.body);

  res.status(200).json({
    success: true,
    message: "job created!",
    data: job,
  });
});
