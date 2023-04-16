const {
    Communication,
    Company,
    DailyLog,
    Delay,
    Equipment,
    Material,
    Project,
    SafetyIncident,
    User,
    Weather,
    Worker
} = require('../models')

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
        return await DailyLog.find({ project: projectId }).populate([
          "workCompleted",
          "materialsUsed",
          "equipmentUsed",
          "weather",
          "delays",
          "safetyIncidents",
          "communications",
        ]);
      },
      companies: async () => {
        return await Company.find({}).populate(["users", "projects"]);
      },
      company: async (_, { id }) => {
        return await Company.findById(id).populate(["users", "projects"]);
      },
    },
    // Add your mutation resolvers here
  };
  
  module.exports = resolvers;

