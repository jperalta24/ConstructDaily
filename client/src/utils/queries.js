import { gql } from "@apollo/client";

export const DAILY_LOGS_QUERY = gql`
  query GetDailyLogs($projectId: ID!) {
    dailyLogs(projectId: $projectId) {
      _id
      project {
        name
      }
      date
      workCompleted {
        workerName
        taskDescription
        hoursWorked
      }
      materialsUsed {
        materialName
        quantity
      }
      equipmentUsed {
        equipmentName
        hoursUsed
      }
      weather {
        temperature
        conditions
      }
      delays {
        description
        duration
      }
      safetyIncidents {
        description
        severity
      }
      communications {
        messageType
        messageContent
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($name: String!) {
    user(name: $name) {
      _id
      name
      email
      role
      projects {
        _id
        name
      }
    }
  }
`;

export const PROJECTS_QUERY = gql`
  {
    projects {
      _id
      name
      users {
        _id
        name
      }
    }
  }
`;

export const QUERY_ME = gql`
  query GetMe {
    me {
      _id
      name
      email
      role
      projects {
        _id
        name
      }
    }
  }
`;
