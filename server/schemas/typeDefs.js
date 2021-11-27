const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Applicant {
    _id: ID
    name: String
    status: String
    feedback: String
    email: String
  }

  type Employee {
    _id: ID
    name: String
    title: String
  }

  type Query {
    applicants: [Applicant]
    employees: [Employee]
  }
`;

module.exports = typeDefs;