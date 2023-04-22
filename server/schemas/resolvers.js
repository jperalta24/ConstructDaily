const {
  Company,
  DailyLog,
  Project,
  User,
} = require('../models')

const { AuthenticationError } = require('apollo-server-express');
const resolvers = {
  Query: {
    projects: async () => {
      return await Project.find({}).populate("dailyLogs");
    },
    project: async (_, { id }) => {
      return await Project.findById(id).populate("dailyLogs");
    },
    users: async () => {
      return await User.find({}).populate("company");
    },
    user: async (_, { id }) => {
      return await User.findById(id).populate("company");
    },
    dailyLogs: async (_, { projectId }) => {
      return await DailyLog.find({ project: projectId });
    },
    companies: async () => {
      return await Company.find({}).populate(["users", "projects"]);
    },
    company: async (_, { id }) => {
      return await Company.findById(id).populate(["users", "projects"]);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("company");
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  // Add your mutation resolvers here
  Mutation: {
    signIn: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect email or password');
      }

      const token = signToken(user);

      return { token, user };
    },
    createUser: async (parent, { name, email, role, companyId }) => {
      const user = await User.create({ name, email, role, company: companyId });
      return user;
    },

    updateUser: async (parent, { _id, name, email, role, companyId }) => {
      const user = await User.findByIdAndUpdate(_id, { name, email, role, company: companyId }, { new: true });
      return user;
    },

    deleteUser: async (parent, { _id }) => {
      const user = await User.findByIdAndDelete(_id);
      return user;
    },

    createCompany: async (parent, { name }) => {
      const company = await Company.create({ name });
      return company;
    },

    updateCompany: async (parent, { _id, name }) => {
      const company = await Company.findByIdAndUpdate(_id, { name }, { new: true });
      return company;
    },

    deleteCompany: async (parent, { _id }) => {
      const company = await Company.findByIdAndDelete(_id);
      return company;
    },

    createProject: async (parent, { name, companyId }) => {
      const project = await Project.create({ name, company: companyId });
      return project;
    },

    updateProject: async (parent, { _id, name, companyId }) => {
      const project = await Project.findByIdAndUpdate(_id, { name, company: companyId }, { new: true });
      return project;
    },

    deleteProject: async (parent, { _id }) => {
      const project = await Project.findByIdAndDelete(_id);
      return project;
    },

    createDailyLog: async (parent, { projectId, date, workCompleted, materialsUsed, equipmentUsed, weather, delays, safetyIncidents, communications }) => {
      const dailyLog = await DailyLog.create({ project: projectId, date, workCompleted, materialsUsed, equipmentUsed, weather, delays, safetyIncidents, communications });
      return dailyLog;
    },

    updateDailyLog: async (parent, { _id, date, workCompleted, materialsUsed, equipmentUsed, weather, delays, safetyIncidents, communications }) => {
      const dailyLog = await DailyLog.findByIdAndUpdate(_id, { date, workCompleted, materialsUsed, equipmentUsed, weather, delays, safetyIncidents, communications }, { new: true });
      return dailyLog;
    },

    deleteDailyLog: async (parent, { _id }) => {
      const dailyLog = await DailyLog.findByIdAndDelete(_id);
      return dailyLog;
    },
  },

};

module.exports = resolvers;

