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
      return await Project.find({}).populate(["users", "dailyLogs"]);
    },
    project: async (_, { id }) => {
      return await Project.findById(id).populate(["users", "dailyLogs"]);
    },
    users: async () => {
      return await User.find({}).populate("projects");
    },
    user: async (_, { id }) => {
      return await User.findById(id).populate("projects");
    },
    dailyLogs: async (_, { projectId }) => {
      return await DailyLog.find({ project: projectId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("projects");
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
    createUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, { _id, name, email, role }) => {
      const user = await User.findByIdAndUpdate(_id, { name, email, role }, { new: true });
      return user;
    },
    deleteUser: async (parent, { _id }) => {
      const user = await User.findByIdAndDelete(_id);
      return user;
    },
    createProject: async (parent, { name }) => {
      const project = await Project.create({ name });
      return project;
    },
    updateProject: async (parent, { _id, name }) => {
      const project = await Project.findByIdAndUpdate(_id, { name }, { new: true });
      return project;
    },
    deleteProject: async (parent, { _id }) => {
      const project = await Project.findByIdAndDelete(_id);
      return project;
    },
    addUserToProject: async (parent, { userId, projectId }) => {
      const project = await Project.findByIdAndUpdate(projectId,
        { $addToSet: { users: userId } },
        { new: true }).populate("users");

      await User.findByIdAndUpdate(userId,
        { $addToSet: { projects: projectId } },
        { new: true });

      return project;
    },
    removeUserFromProject: async (parent, { userId, projectId }) => {
      const project = await Project.findByIdAndUpdate(projectId,
        { $pull: { users: userId } },
        { new: true }).populate("users");

      await User.findByIdAndUpdate(userId,
        { $pull: { projects: projectId } },
        { new: true });

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

