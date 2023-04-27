import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import DailyLogPage from './pages/DailyLogPage';
import {UserProfile,LoginForm, RegisterForm} from './components/Users/';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import DailyLogPage from './Pages/DailyLogPage';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import ProjectList from './components/Projects/ProjectList';

import MyNav from './components/Navigation/Nav';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <MyNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/dailylog" element={<DailyLogPage />} />
          <Route path="/login"element={<LoginForm/>}/>
          <Route path="/profile" element={<UserProfile />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
      {/* main */}
    </ApolloProvider>
  );
};

export default App;


