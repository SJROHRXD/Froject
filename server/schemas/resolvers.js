const { Applicant, Employee, Post, Schedule } = require('../models');

const resolvers = {
  Query: {
    applicants: async () => {
      return await Applicant.find({}).populate('posting');
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