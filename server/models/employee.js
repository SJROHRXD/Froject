const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// set up pre-save middleware to create password
EmployeeSchema.pre("save", async function (next) {
  console.log("inse emp schema pre");
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 2;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
EmployeeSchema.methods.isCorrectPassword = async function (password) {
  console.log(`password ${password} this.password ${this.password}`);

  console.log(
    "bcrypt.compare(password, this.password)" +
      (await bcrypt.compare(password, this.password))
  );
  return await bcrypt.compare(password, this.password);
};

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
