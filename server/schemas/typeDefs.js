const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Worker {
    id: ID!
    name: String!
    role: String
  }

  type Material {
    id: ID!
    name: String!
    quantity: Int!
    location: String
  }

  type Equipment {
    id: ID!
    name: String!
    hours: Float
    issues: String
  }

  type Weather {
    id: ID!
    temperature: Float
    windSpeed: Float
    precipitation: String
  }

  type Delay {
    id: ID!
    reason: String!
    mitigation: String
  }

  type SafetyIncident {
    id: ID!
    nature: String!
    injuries: String
  }

  type Communication {
    id: ID!
    type: String!
    date: String!
    details: String
  }

  type DailyLog {
    id: ID!
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
    id: ID!
    name: String!
    email: String!
    role: String
    company: Company!
  }

  type Company {
    id: ID!
    name: String!
    users: [User]
    projects: [Project]
  }

  type Project {
    id: ID!
    name: String!
    company: Company!
    dailyLogs: [DailyLog]
  }

  type Query {
    projects: [Project]
    project(id: ID!): Project
    users: [User]
    user(id: ID!): User
    dailyLogs(projectId: ID!): [DailyLog]
    dailyLog(id: ID!): DailyLog
    companies: [Company]
    company(id: ID!): Company
  }

  type Mutation {
    # Add mutations here
  }
`;

module.exports = typeDefs;
