import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import DailyLogPage from "./pages/DailyLogPage";
import { UserProfile, LoginForm, RegisterForm } from "./components/Users";
import MyNav from "./components/Navigation/Nav";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Container, Row, Col, Navbar } from "react-bootstrap";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
];

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar>
          <MyNav
            link={links.map(({ label, link }) => (
              <Link key={link} to={link}>
                {label}
              </Link>
            ))}
          />
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/dailylog" element={<DailyLogPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/signup" element={<RegisterForm />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </ApolloProvider>
  );
};

export default App;
