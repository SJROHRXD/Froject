const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  posting: {
    type: Schema.Types.ObjectId, 
    ref: 'Post'
  }, 
  employees: [
    {
      type: Schema.Types.ObjectId, 
      ref: 'Employee'
    }
  ],
  date: {
    type: String,
    required: true
  }
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;