import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { Navbar } from "./Components/layout/Navbar";
import { Footer } from "./Components/layout/Footer";
// import { Router } from 'express';
import { SignIn } from "./Components/Landing/SignIn.js";
import { Applicant } from "./Components/ApplicantView.js/Applicant";
import { Pricing } from "./Components/Landing/Pricing";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
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
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" element={SignIn()} />
            <Route exact path="/applicant" element={Applicant()} />
            <Route exact path="/pricing" element={Pricing()} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
