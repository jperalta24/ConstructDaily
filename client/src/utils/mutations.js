import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        role
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $role: String
  ) {
    createUser(name: $name, email: $email, password: $password, role: $role) {
      token
      user {
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
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($_id: ID!, $name: String, $email: String, $role: String) {
    updateUser(_id: $_id, name: $name, email: $email, role: $role) {
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

export const DELETE_USER = gql`
  mutation DeleteUser($_id: ID!) {
    deleteUser(_id: $_id) {
      _id
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($name: String!, $userId: ID!) {
    createProject(name: $name, userId: $userId) {
      _id
      name
      users {
        _id
        name
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($_id: ID!, $name: String!) {
    updateProject(_id: $_id, name: $name) {
      _id
      name
      users {
        _id
        name
      }
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($_id: ID!) {
    deleteProject(_id: $_id) {
      _id
    }
  }
`;

export const ADD_USER_TO_PROJECT = gql`
  mutation AddUserToProject($userId: ID!, $projectId: ID!) {
    addUserToProject(userId: $userId, projectId: $projectId) {
      _id
      name
      users {
        _id
        name
      }
    }
  }
`;

export const REMOVE_USER_FROM_PROJECT = gql`
  mutation RemoveUserFromProject($userId: ID!, $projectId: ID!) {
    removeUserFromProject(userId: $userId, projectId: $projectId) {
      _id
      name
      users {
        _id
        name
      }
    }
  }
`;

export const CREATE_DAILYLOG = gql`
  mutation CreateDailyLog(
    $projectId: ID!
    $date: String!
    $workCompleted: [WorkCompletedInput]
    $materialsUsed: [MaterialsUsedInput]
    $equipmentUsed: [EquipmentUsedInput]
    $weather: [WeatherInput]
    $delays: [DelayInput]
    $safetyIncidents: [SafetyIncidentInput]
    $communications: [CommunicationInput]
  ) {
    createDailyLog(
      projectId: $projectId
      date: $date
      workCompleted: $workCompleted
      materialsUsed: $materialsUsed
      equipmentUsed: $equipmentUsed
      weather: $weather
      delays: $delays
      safetyIncidents: $safetyIncidents
      communications: $communications
    ) {
      _id
      date
      project {
        _id
        name
      }
    }
  }
`;

export const UPDATE_DAILYLOG = gql`
  mutation UpdateDailyLog($_id: ID!, $date: String) {
    updateDailyLog(_id: $_id, date: $date) {
      _id
      date
    }
  }
`;

export const DELETE_DAILYLOG = gql`
  mutation DeleteDailyLog($_id: ID!) {
    deleteDailyLog(_id: $_id) {
      _id
    }
  }
`;
