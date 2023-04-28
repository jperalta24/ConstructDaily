import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import DailyLogPage from './pages/DailyLogPage';
import {UserProfile, LoginForm, RegisterForm } from './components/Users';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import ProjectList from './components/Projects/ProjectList';
import { Container, Grid, Header } from '@mantine/core';
// import { Row, Col } from '@mantine/core';
import MyNav from './components/Navigation/Nav';
// import { Link } from "react-router-dom";

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

const links = [
  { label: "Home", link: "/" },
  { label: "Projects", link: "/projects" },
  { label: "Daily Log", link: "/dailylog" },
  { label: "Login", link: "/login" },
  { label: "Profile", link: "/profile" },
  { label: "Signup", link: "/registerForm" },
  
  // Add other links here
];

const App = () => {
  // const isSmallerThanLg = useMediaQuery("(max-width: 768px)");
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header
        // {/* // style={{ paddingTop: isSmallerThanLg ? "1rem" : "5rem" }} */}
        >
          <Grid>
            <Container>
              <Grid.Col>
                <MyNav
                  // withBorder
                  // position="fixed"
                  // activeLinkClassName="text-blue-600 font-bold"
                  link={links.map(({ label, link }) => (
                    <Link key={link} to={link}>
                      {label}
                    </Link>
                  ))}
                />
              </Grid.Col>
            </Container>
            </Grid>
            </Header>
            <Container>
              <Grid>
            {/* <Value> */}
              <Grid.Col xs={12}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<ProjectPage />} />
                  <Route path="/dailylog" element={<DailyLogPage />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/signup"element={<RegisterForm/>}/>
                  {/* Add other routes here */}
                </Routes>
              </Grid.Col>
            {/* </Value> */}
          </Grid>
        </Container>
      </Router>
      {/* main */}
    </ApolloProvider>
  );
};

export default App;