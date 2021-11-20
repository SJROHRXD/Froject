const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  //todo the posting Should be Posting model not just a string
  posting: String, 
  // applicant should be an array of applicant models
  applicant: String,
  // employee should be an employee model object not a string
  employee: String,
  date: Date
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;