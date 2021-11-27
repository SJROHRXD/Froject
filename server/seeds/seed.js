const db = require('../config/db');
const { Employee, Applicant, Post, Schedule}  = require('../models');

const applicantData = require('./applicantData.json');
const employeeData = require('./employeeData.json');
const postData = require('./postData.json');
const scheduleData = require('./scheduleData.json');

db.once('open', async () => {
  // clean database
  await Employee.deleteMany({});
  await Applicant.deleteMany({});
  await Post.deleteMany({});
  await Schedule.deleteMany({});

  const employees = await Employee.insertMany(employeeData);
  const applicants = await Applicant.insertMany(applicantData);
  const posts = await Post.insertMany(postData);
  const schedules = await Schedule.insertMany(scheduleData);

  for (currentApplicant of applicants) {
    const tempPost = posts[Math.floor(Math.random() * posts.length)];
    currentApplicant.posting = tempPost._id;
    await currentApplicant.save();

    const tempSchedule = schedules[Math.floor(Math.random() * schedules.length)];
    currentApplicant.schedule = tempSchedule._id;
    await currentApplicant.save();
  }

  console.log('all done!');
  process.exit(0);
});
