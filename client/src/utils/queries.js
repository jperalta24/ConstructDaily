import { gql } from '@apollo/client';

export const DAILY_LOGS_QUERY = gql`
  query GetDailyLogs($projectId: ID!) {
    dailyLogs(projectId: $projectId) {
      _id
      date
      workCompleted {
        worker {
          _id
          name
          role
        }
        hours
      }
      materialsUsed {
        material {
          _id
          name
        }
        quantity
        location
      }
      equipmentUsed {
        equipment {
          _id
          name
        }
        hours
        issues
      }
      weather {
        temperature
        windSpeed
        precipitation
      }
      delays {
        reason
        mitigation
      }
      safetyIncidents {
        nature
        injuries
      }
      communications {
        type
        date
        details
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
  query GetProjects($userId: ID!) {
    projects(userId: $userId) {
      _id
      name
      users{
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




