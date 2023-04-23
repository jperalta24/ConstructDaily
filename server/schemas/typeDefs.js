const { gql } = require("apollo-server-express");

const typeDefs = gql`
type DailyLog {
  _id: ID!
  date: String!
  project: Project!
  workCompleted: [WorkCompleted]
  materialsUsed: [MaterialsUsed]
  equipmentUsed: [EquipmentUsed]
  weather: Weather
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
    me: User
  }

type Mutation {
  createUser(name: String!, email: String!, role: String, companyId: ID!): User
  updateUser(_id: ID!, name: String, email: String, role: String, companyId: ID): User
  deleteUser(_id: ID!): User
  createCompany(name: String!): Company
  updateCompany(_id: ID!, name: String): Company
  deleteCompany(_id: ID!): Company
  createProject(name: String!, companyId: ID!): Project
  updateProject(_id: ID!, name: String, companyId: ID): Project
  deleteProject(_id: ID!): Project
  createDailyLog(projectId: ID!, date: String!, workCompleted: [WorkCompletedInput], materialsUsed: [MaterialsUsedInput], equipmentUsed: [EquipmentUsedInput], weather: WeatherInput, delays: [DelayInput], safetyIncidents: [SafetyIncidentInput], communications: [CommunicationInput]): DailyLog
  updateDailyLog(_id: ID!, date: String, workCompleted: [WorkCompletedInput], materialsUsed: [MaterialsUsedInput], equipmentUsed: [EquipmentUsedInput], weather: WeatherInput, delays: [DelayInput], safetyIncidents: [SafetyIncidentInput], communications: [CommunicationInput]): DailyLog
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
    token: String
    user: User
  }
  `;
// # Add mutations for the other types (e.g., Worker, Material, Equipment, etc.) as needed

module.exports = typeDefs;
