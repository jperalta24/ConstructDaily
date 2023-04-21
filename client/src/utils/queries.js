import { gql } from '@apollo/client';

export const DAILY_LOGS_QUERY = gql`
  query GetDailyLogs($projectId: ID!) {
    dailyLogs(projectId: $projectId) {
      id
      date
      workCompleted {
        id
        name
        role
      }
      materialsUsed {
        id
        name
        quantity
        location
      }
      equipmentUsed {
        id
        name
        hours
        issues
      }
      weather {
        id
        temperature
        windSpeed
        precipitation
      }
      delays {
        id
        reason
        mitigation
      }
      safetyIncidents {
        id
        nature
        injuries
      }
      communications {
        id
        type
        date
        details
      }
    }
  }
`;



