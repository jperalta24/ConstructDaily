import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import HomePage from "./Pages/HomePage";
import DailyLogPage from "./Pages/DailyLogPage";
import ProjectPage from "./Pages/ProjectPage";

//import pages todo
import MyNav from "./components/Navigation/Nav";

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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="App-header">
            <MyNav />
          </header>
          <body>
            <div className="container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dailylog" element={<DailyLogPage />} />
                <Route path="/projectpage" element={<ProjectPage />} />
              </Routes>
            </div>
          </body>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
