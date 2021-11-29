import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


import { Navbar } from './Components/layout/Navbar';
import { Footer } from './Components/layout/Footer';
// import { Router } from 'express';
import { SignIn } from './Components/Landing/SignIn.js';
import { Applicant } from './Components/ApplicantView.js/Applicant';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path='/' element={SignIn()} />
            <Route exact path='/applicant' element={Applicant()} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
      </ApolloProvider>
  );
}

export default App;