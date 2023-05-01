const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type DailyLog {
    _id: ID!
    date: String!
    project: Project!
    workCompleted: [WorkCompleted]
    materialsUsed: [MaterialsUsed]
    equipmentUsed: [EquipmentUsed]
    weather: [Weather]
    delays: [Delay]
    safetyIncidents: [SafetyIncident]
    communications: [Communication]
  }

  type WorkCompleted {
    workerName: String
    taskDescription: String
    hoursWorked: Int
  }

  type MaterialsUsed {
    materialName: String
    quantity: Int
  }

  type EquipmentUsed {
    equipmentName: String
    hoursUsed: Int
  }

  type Weather {
    temperature: Int
    conditions: String
  }

  type Delay {
    description: String
    duration: Int
  }

  type SafetyIncident {
    description: String
    severity: String
  }

  type Communication {
    messageType: String
    messageContent: String
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    role: String
    projects: [Project]
  }

  type Project {
    _id: ID!
    name: String!
    users: [User]
    dailyLogs: [DailyLog]
  }

  type Query {
    projects: [Project]
    project(_id: ID!): Project
    users: [User]
    user(name: String!): User
    dailyLogs(projectId: ID!): [DailyLog]
    dailyLog(_id: ID!): DailyLog
    me: User
  }

  type Mutation {
    createUser(
      name: String!
      email: String!
      password: String!
      role: String
    ): Auth
    updateUser(_id: ID!, name: String, email: String, role: String): User
    deleteUser(_id: ID!): User
    createProject(name: String!, userId: ID!): Project
    updateProject(_id: ID!, name: String!): Project
    deleteProject(_id: ID!): Project
    addUserToProject(userId: ID!, projectId: ID!): Project
    removeUserFromProject(userId: ID!, projectId: ID!): Project
    createDailyLog(
      projectId: ID!
      date: String!
      workCompleted: [WorkCompletedInput]
      materialsUsed: [MaterialsUsedInput]
      equipmentUsed: [EquipmentUsedInput]
      weather: [WeatherInput]
      delays: [DelayInput]
      safetyIncidents: [SafetyIncidentInput]
      communications: [CommunicationInput]
    ): DailyLog
    updateDailyLog(
      _id: ID!
      date: String
      workCompleted: [WorkCompletedInput]
      materialsUsed: [MaterialsUsedInput]
      equipmentUsed: [EquipmentUsedInput]
      weather: [WeatherInput]
      delays: [DelayInput]
      safetyIncidents: [SafetyIncidentInput]
      communications: [CommunicationInput]
    ): DailyLog
    deleteDailyLog(_id: ID!): DailyLog
    signIn(email: String!, password: String!): Auth
  }
  input WorkCompletedInput {
    workerName: String
    taskDescription: String
    hoursWorked: Int
  }

  input MaterialsUsedInput {
    materialName: String
    quantity: Int
  }

  input EquipmentUsedInput {
    equipmentName: String
    hoursUsed: Int
  }

  input WeatherInput {
    temperature: Float
    conditions: String
  }

  input DelayInput {
    description: String
    duration: Int
  }

  input SafetyIncidentInput {
    description: String
    severity: String
  }

  input CommunicationInput {
    messageType: String
    messageContent: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;
// # Add mutations for the other types (e.g., Worker, Material, Equipment, etc.) as needed

module.exports = typeDefs;
