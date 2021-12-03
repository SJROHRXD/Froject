const { AuthenticationError } = require("apollo-server-express");
const { Applicant, Employee, Post, Schedule } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    applicants: async () => {
      return Applicant.find().populate("posting").populate("schedule");
    },
    applicantByEmail: async (parent, args) => {
      // returns the first found record that matches the regex email ignoring the case
      return await Applicant.findOne({
        email: { $regex: args.email, $options: "i" },
      })
        .populate("posting")
        .populate("schedule");
    },
    applicantByName: async (parent, args) => {
      return await Applicant.findOne({
        name: { $regex: args.name, $options: "i" },
      })
        .populate("posting")
        .populate("schedule");
    },
    employees: async () => {
      return await Employee.find({});
    },
    employee: async (parent, { employeeId }) => {
      return Employee.findOne({ _id: employeeId });
    },
    posts: async () => {
      return await Post.find({});
    },
    schedules: async () => {
      return await Schedule.find({});
    },
  },
  Mutation: {
    addApplicant: async (parent, { name, email, status }) => {
      return await Applicant.create({ name, email, status });
    },
    addSchedule: async (parent, { date }) => {
      return await Schedule.create({ date });
    },
    addEmployee: async (parent, { name, title, password }) => {
      const employee = await Employee.create({ name, title, password });
      const token = signToken(employee);
      return { token, user };
    },
    login: async (parent, { name, password }) => {
      const employee = await Employee.findOne({ name });
      console.log(`employee ${name} and password ${password}`);
      if (!employee) {
        throw new AuthenticationError("No employee with this password found!");
      }

      const correctPw = await employee.isCorrectPassword(password);
      console.log(`inside login mutaion... correctPw ${correctPw}`);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(employee);
      return { token, employee };
    },

    addPost: async (parent, { name }) => {
      return await Post.create({ name });
    },
    addFeedback: async (parent, { email, feedback }) => {
      return await Applicant.findOneAndUpdate({ email: email }, { feedback });
    },
  },
};

module.exports = resolvers;
