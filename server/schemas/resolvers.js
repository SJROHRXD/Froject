const { Applicant, Employee, Post, Schedule } = require('../models');

const resolvers = {
  Query: {
    applicants: async () => {
      return await Applicant.find({}).populate('posting').populate('schedule');
    },
    applicantByEmail: async (parent, args) => {
    // returns the first found record that matches the regex email ignoring the case
    return await Applicant.findOne({email:{'$regex' : args.email, '$options' : 'i'}}).populate('posting').populate('schedule');
    },
    applicantByName: async (parent, args) => {
      return await Applicant.findOne({name:{'$regex' : args.name, '$options' : 'i'}}).populate('posting').populate('schedule');
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