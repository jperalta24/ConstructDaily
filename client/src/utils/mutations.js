import { gql } from '@apollo/client';

export const SIGN_IN = gql`
mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        role
        company {
          _id
          name
        }
      }
    }
  }
  `;

 export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $role: String, $companyId: ID!) {
    createUser(name: $name, email: $email, role: $role, companyId: $companyId) {
      _id
      name
      email
      role
      company {
        _id
        name
      }
    }
  }  
  `;

  export const UPDATE_USER = gql`
  mutation UpdateUser($_id: ID!, $name: String, $email: String, $role: String, $companyId: ID) {
    updateUser(_id: $_id, name: $name, email: $email, role: $role, companyId: $companyId) {
      _id
      name
      email
      role
      company {
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

  export const CREATE_COMPANY = gql`
  mutation CreateCompany($name: String!) {
    createCompany(name: $name) {
      _id
      name
    }
  }  
  `;

  export const UPDATE_COMPANY = gql`
  mutation UpdateCompany($_id: ID!, $name: String) {
    updateCompany(_id: $_id, name: $name) {
      _id
      name
    }
  }  
  `

  export const DELETE_COMPANY = gql`
  mutation DeleteCompany($_id: ID!) {
    deleteCompany(_id: $_id) {
      _id
    }
  }  
  `;

  export const CREATE_PROJECT = gql`
  mutation CreateProject($name: String!, $companyId: ID!) {
    createProject(name: $name, companyId: $companyId) {
      _id
      name
      company {
        _id
        name
      }
    }
  }  
  `
  export const UPDATE_PROJECT = gql`
  mutation UpdateProject($_id: ID!, $name: String, $companyId: ID) {
    updateProject(_id: $_id, name: $name, companyId: $companyId) {
      _id
      name
      company {
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

  export const CREATE_DAILYLOG = gql`
  mutation CreateDailyLog($projectId: ID!, $date: String!) {
    createDailyLog(projectId: $projectId, date: $date) {
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