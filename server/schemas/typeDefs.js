const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Applicant {
    _id: ID
    name: String
    status: String
    feedback: String
    email: String
    posting: Post
    schedule: Schedule
    skills: [String]
  }

  type Employee {
    _id: ID
    name: String
    title: String
    # There is now a field to store the user's password
    password: String
  }

  type Auth {
    token: ID!
    employee: Employee
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
    employees: [Employee]!
    employee(employeeId: ID!): Employee
    applicants: [Applicant]!
    posts: [Post]
    schedules: [Schedule]
    applicantByEmail(email: String!): Applicant
    applicantByName(name: String!): Applicant
  }

  type Mutation {
    #set the required fields for new applicant
    addApplicant(name: String!, email: String!, status: String!): Applicant
    addSchedule(date: String!): Schedule
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addEmployee(name: String!, title: String!, password: String!): Auth
    login(password: String!): Auth
    addPost(name: String!): Post
    addFeedback(email: String!, feedback: String): Applicant
  }
`;

module.exports = typeDefs;
