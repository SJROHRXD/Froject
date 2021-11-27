const { Applicant, Employee } = require('../models');

const resolvers = {
  Query: {
    applicants: async () => {
      return await Applicant.find({});
    }, 
    employees: async () => {
      return await Employee.find({});
    }
  }
}; 

module.exports = resolvers;