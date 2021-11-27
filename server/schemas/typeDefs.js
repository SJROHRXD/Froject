const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Applicant {
    _id: ID
    name: String
    status: String
    feedback: String
    email: String
    posting: Post
    schedule: Schedule
  }

  type Employee {
    _id: ID
    name: String
    title: String
  }

  type Post {
    _id: ID
    name: String
  }

  type Schedule {
    _id: ID 
    date: String
  }

  type Query {
    applicants: [Applicant]
    employees: [Employee]
    posts: [Post]
    schedules: [Schedule]
  }
`;

module.exports = typeDefs;