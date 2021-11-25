const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ApplicantSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  posting: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }, 
  // status can be inprogress, rejected, offer
  status: {
    type: String,
    required: true, 
    trim: true
  },
  schedule: {
    type: Schema.Types.ObjectId,
    ref: 'Schedule',
  },
  // since we are only considering an applicant for one job, we can have the feedback added here
  feedback: {
    type: String, 
    trim: true,
  },
  // todo add email validation 
  email: {
    type: String, 
    required: true, 
    trim: true,
  }
});

const Applicant = mongoose.model("Applicant", ApplicantSchema);

module.exports = Applicant;
