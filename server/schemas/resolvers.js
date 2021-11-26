const { Applicant } = require('../models');

const resolvers = {
  Query: {
    applicants: async () => {
      return await Applicant.find({});
    }
  }
}; 

module.exports = resolvers;