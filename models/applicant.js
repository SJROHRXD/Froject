const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ApplicantSchema = new Schema({
  name: String,
  //todo the posting Should be Posting model not just a string
  posting: String, 
  // status can be inprogress, rejected, offer
  status: String,
  // schedule should be a schedule model object not a string
  schedule: String,
  // since we are only considering an applicant for one job, we can have the feedback added here
  feedback: String,
  // TODO: add email validation 
  email: String
});

const Applicant = mongoose.model("Applicant", ApplicantSchema);

module.exports = Applicant;
