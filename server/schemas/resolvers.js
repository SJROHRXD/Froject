const { Applicant, Employee, Post, Schedule } = require('../models');

const resolvers = {
  Query: {
    applicants: async () => {
      return Applicant.find().populate('posting').populate('schedule');
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
  },
  Mutation: {
    addApplicant: async (parent, {name, email, status}) => {
      return await Applicant.create({name, email, status});
    }, 
    addSchedule: async (parent, {date}) => {
      return await Schedule.create({date});
    }, 
    addEmployee: async (parent, {name, title}) => {
      return await Employee.create({name, title});
    }, 
    addPost: async (parent, {name}) => {
      return await Post.create({name});
    }
  }
}; 

module.exports = resolvers;