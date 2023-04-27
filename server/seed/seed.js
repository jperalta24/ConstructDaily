const mongoose = require("mongoose");
const { Company, User, Project } = require("../models");

mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seed = async () => {
  try {
    // Create companies
    const company1 = new Company({ name: "ABC Construction" });
    const company2 = new Company({ name: "XYZ Builders" });
    await Company.insertMany([company1, company2]);

    // Create users
    const user1 = new User({
      name: "John Smith",
      email: "john@example.com",
      password: "password1",
      role: "admin",
      company: company1._id,
    });
    const user2 = new User({
      name: "Jane Doe",
      email: "jane@example.com",
      password: "password2",
      role: "manager",
      company: company1._id,
    });
    const user3 = new User({
      name: "Bob Johnson",
      email: "bob@example.com",
      password: "password3",
      role: "worker",
      company: company2._id,
    });
    await User.insertMany([user1, user2, user3]);

    // Create projects
    const project1 = new Project({
      name: "New Building",
      company: company1._id,
    });
    const project2 = new Project({
      name: "Remodel",
      company: company2._id,
    });
    await Project.insertMany([project1, project2]);

    // Assign users to companies
    company1.users = [user1._id, user2._id];
    company2.users = [user3._id];
    await Promise.all([company1.save(), company2.save()]);

    // Assign projects to companies
    company1.projects = [project1._id];
    company2.projects = [project2._id];
    await Promise.all([company1.save(), company2.save()]);

    console.log("Seed data added successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

seed();


const mongoose = require("mongoose");
const { User, Company, Project, DailyLog } = require("./models");

mongoose.connect("mongodb://localhost/mydatabase", { useNewUrlParser: true, useUnifiedTopology: true });

const users = [
  {
    name: "Alice",
    email: "alice@example.com",
    password: "password",
    role: "admin",
  },
  {
    name: "Bob",
    email: "bob@example.com",
    password: "password",
    role: "manager",
  },
  {
    name: "Charlie",
    email: "charlie@example.com",
    password: "password",
    role: "worker",
  },
];

const companies = [
  {
    name: "Acme Inc",
    address: "123 Main St",
  },
  {
    name: "Widget Corp",
    address: "456 High St",
  },
];

const projects = [
  {
    name: "Project A",
    users: [],
    dailyLogs: [],
  },
  {
    name: "Project B",
    users: [],
    dailyLogs: [],
  },
];

const dailyLogs = [
  {
    date: new Date("2023-04-23"),
    project: null,
    workCompleted: [],
    materialsUsed: [],
    equipmentUsed: [],
    weather: {
      temperature: 20,
      conditions: "Sunny",
    },
    delays: [],
    safetyIncidents: [],
    communications: [],
  },
];

async function seed() {
  await User.deleteMany({});
  await Company.deleteMany({});
  await Project.deleteMany({});
  await DailyLog.deleteMany({});

  const savedUsers = await User.insertMany(users);
  const savedCompanies = await Company.insertMany(companies);
  const savedProjects = await Project.insertMany(projects);
  const savedDailyLogs = await DailyLog.insertMany(dailyLogs);

  console.log(`Seeded ${savedUsers.length} users, ${savedCompanies.length} companies, ${savedProjects.length} projects, and ${savedDailyLogs.length} daily logs.`);
  mongoose.connection.close();
}

seed();
