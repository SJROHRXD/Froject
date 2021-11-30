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
    applicants: [Applicant]!
    employees: [Employee]
    posts: [Post]
    schedules: [Schedule]
    applicantByEmail(email: String!): Applicant
    applicantByName(name: String!): Applicant
  }

  type Mutation {
    #set the required fields for new applicant
    addApplicant(name: String!, email: String!, status: String!): Applicant
    addSchedule(date: String!): Schedule
    addEmployee(name: String!, title: String!) : Employee
    addPost(name: String!): Post
  }
`;

module.exports = typeDefs;