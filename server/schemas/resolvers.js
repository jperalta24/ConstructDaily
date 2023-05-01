const { DailyLog, Project, User } = require("../models");
const { signToken } = require("../utils/auth");

const { AuthenticationError } = require("apollo-server-express");
const resolvers = {
  Query: {
    projects: async (_, args, context) => {
      console.log("user");
      const user = await User.findOne({ _id: context.user._id }).populate(
        "projects"
      );
      return user.projects;
    },
    project: async (_, { id }) => {
      return await Project.findById(id).populate(["users", "dailyLogs"]);
    },
    users: async () => {
      return await User.find({}).populate("projects");
    },
    user: async (parent, { name }) => {
      return await User.findOne({ name }).populate("projects");
    },
    dailyLogs: async (_, { projectId }) => {
      console.log("projectId:", projectId);
      const logs = await DailyLog.find({ project: projectId }).populate(
        "project"
      );
      console.log("logs:", logs); // Log the logs array
      return logs;
      // return await DailyLog.find({ project: projectId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("projects");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  // Add your mutation resolvers here
  Mutation: {
    signIn: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect email or password");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect email or password");
      }

      const token = signToken(user);

      return { token, user };
    },
    createUser: async (parent, { name, email, password, role }) => {
      const user = await User.create({ name, email, password, role });
      if (user) {
        const token = signToken(user);
        return { token, user };
      }

      // If something goes wrong during the user creation process, throw an error
      throw new Error("Error creating user.");
    },
    updateUser: async (parent, { _id, name, email, role }) => {
      const user = await User.findByIdAndUpdate(
        _id,
        { name, email, role },
        { new: true }
      );
      return user;
    },
    deleteUser: async (parent, { _id }) => {
      const user = await User.findByIdAndDelete(_id);
      return user;
    },
    createProject: async (parent, { name, userId }) => {
      const user = await User.findById(userId);

      if (!user) {
        throw new Error("User not found");
      }

      const project = await Project.create({ name, userId });
      user.projects.push(project._id);
      await user.save();

      return project;
    },
    updateProject: async (parent, { _id, name }) => {
      const project = await Project.findByIdAndUpdate(
        _id,
        { name },
        { new: true }
      );
      return project;
    },
    deleteProject: async (parent, { _id }) => {
      const project = await Project.findByIdAndDelete(_id);
      return project;
    },
    addUserToProject: async (parent, { userId, projectId }) => {
      const project = await Project.findByIdAndUpdate(
        projectId,
        { $addToSet: { users: userId } },
        { new: true }
      ).populate("users");

      await User.findByIdAndUpdate(
        userId,
        { $addToSet: { projects: projectId } },
        { new: true }
      );

      return project;
    },
    removeUserFromProject: async (parent, { userId, projectId }) => {
      const project = await Project.findByIdAndUpdate(
        projectId,
        { $pull: { users: userId } },
        { new: true }
      ).populate("users");

      await User.findByIdAndUpdate(
        userId,
        { $pull: { projects: projectId } },
        { new: true }
      );

      return project;
    },
    createDailyLog: async (
      parent,
      {
        projectId,
        date,
        workCompleted,
        materialsUsed,
        equipmentUsed,
        weather,
        delays,
        safetyIncidents,
        communications,
      }
    ) => {
      const dailyLog = await DailyLog.create({
        project: projectId,
        date,
        workCompleted,
        materialsUsed,
        equipmentUsed,
        weather,
        delays,
        safetyIncidents,
        communications,
      });

      console.log("Daily log created:", dailyLog);

      await Project.findByIdAndUpdate(projectId, {
        $push: { dailyLogs: dailyLog._id },
      });

      const project = await Project.findById(projectId).populate("dailyLogs");
      console.log("Updated project:", project);

      const populatedDailyLog = await DailyLog.findById(dailyLog._id).populate(
        "project"
      );
      console.log("Populated daily log:", populatedDailyLog);

      return populatedDailyLog;
    },

    updateDailyLog: async (
      parent,
      {
        _id,
        date,
        workCompleted,
        materialsUsed,
        equipmentUsed,
        weather,
        delays,
        safetyIncidents,
        communications,
      }
    ) => {
      const dailyLog = await DailyLog.findByIdAndUpdate(
        _id,
        {
          date,
          workCompleted,
          materialsUsed,
          equipmentUsed,
          weather,
          delays,
          safetyIncidents,
          communications,
        },
        { new: true }
      );
      return dailyLog;
    },

    deleteDailyLog: async (parent, { _id }) => {
      const dailyLog = await DailyLog.findByIdAndDelete(_id);
      return dailyLog;
    },
  },
};

module.exports = resolvers;
