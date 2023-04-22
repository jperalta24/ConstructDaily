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
  query GetMe {
    me {
      _id
      name
      email
      role
      company {
        _id
        name
        projects {
          _id
          name
        }
      }
    }
  }
  
  
`;




