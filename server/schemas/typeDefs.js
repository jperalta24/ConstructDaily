const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Worker {
    _id: ID!
    name: String!
    role: String
  }

  type Material {
    _id: ID!
    name: String!
    quantity: Int!
    location: String
  }

  type Equipment {
    _id: ID!
    name: String!
    hours: Float
    issues: String
  }

  type Weather {
    _id: ID!
    temperature: Float
    windSpeed: Float
    precipitation: String
  }

  type Delay {
    _id: ID!
    reason: String!
    mitigation: String
  }

  type SafetyIncident {
    _id: ID!
    nature: String!
    injuries: String
  }

  type Communication {
    _id: ID!
    type: String!
    date: String!
    details: String
  }

  type DailyLog {
    _id: ID!
    date: String!
    project: Project!
    workCompleted: [Worker]
    materialsUsed: [Material]
    equipmentUsed: [Equipment]
    weather: Weather
    delays: [Delay]
    safetyIncidents: [SafetyIncident]
    communications: [Communication]
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    role: String
    company: Company!
  }

  type Company {
    _id: ID!
    name: String!
    users: [User]
    projects: [Project]
  }

  type Project {
    _id: ID!
    name: String!
    company: Company!
    dailyLogs: [DailyLog]
  }

  type Query {
    projects: [Project]
    project(_id: ID!): Project
    users: [User]
    user(_id: ID!): User
    dailyLogs(projectId: ID!): [DailyLog]
    dailyLog(_id: ID!): DailyLog
    companies: [Company]
    company(_id: ID!): Company
  }

  type Mutation {
    # User mutations
    createUser(name: String!, email: String!, role: String, companyId: ID!): User
    updateUser(_id: ID!, name: String, email: String, role: String, companyId: ID): User
    deleteUser(_id: ID!): User

    # Company mutations
    createCompany(name: String!): Company
    updateCompany(_id: ID!, name: String): Company
    deleteCompany(_id: ID!): Company

    # Project mutations
    createProject(name: String!, companyId: ID!): Project
    updateProject(_id: ID!, name: String, companyId: ID): Project
    deleteProject(_id: ID!): Project

    # DailyLog mutations
    createDailyLog(projectId: ID!, date: String!): DailyLog
    updateDailyLog(_id: ID!, date: String): DailyLog
    deleteDailyLog(_id: ID!): DailyLog

    # Add mutations for the other types (e.g., Worker, Material, Equipment, etc.) as needed
  }
`;

module.exports = typeDefs;
