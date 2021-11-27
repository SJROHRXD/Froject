const { Applicant, Employee, Post, Schedule } = require('../models');

const resolvers = {
  Query: {
    applicants: async () => {
      return await Applicant.find({}).populate('posting').populate('schedule');
    },
    applicant: async (parent, args) => {
      console.log(args.email);
      return await Applicant.findOne({email: args.email});
    },
    employees: async () => {
      return await Employee.find({});
    }, 
    posts: async () => {
      return await Post.find({});
    }, 
    schedules: async () => {
      return await Schedule.find({});
    }
  }
}; 

module.exports = resolvers;