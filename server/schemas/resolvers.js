const { Applicant, Employee, Post, Schedule } = require('../models');

const resolvers = {
  Query: {
    applicants: async () => {
      return await Applicant.find({}).populate('posting').populate('schedule');
    },
    applicant: async (parent, args) => {
    // returns the first found record that matches the regex email ignoring the case
    return await Applicant.findOne({email:{'$regex' : args.email, '$options' : 'i'}});
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