const { Applicant, Employee, Post } = require('../models');

const resolvers = {
  Query: {
    applicants: async () => {
      return await Applicant.find({});
    }, 
    employees: async () => {
      return await Employee.find({});
    }, 
    posts: async () => {
      return await Post.find({});
    }
  }
}; 

module.exports = resolvers;