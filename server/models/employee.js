const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true, 
    trim: true
  },
  title: {
    type: String, 
    required: true, 
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  }
});

// set up pre-save middleware to create password
EmployeeSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const empPW = 10;
    this.password = await bcrypt.hash(this.password, empPW);
  }

  next();
});

// compare the incoming password with the hashed password
EmployeeSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
