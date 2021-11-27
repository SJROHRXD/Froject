import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './Components/layout/Navbar';
import { Footer } from './Components/layout/Footer';
// import { Router } from 'express';
import { SignIn } from './Components/Landing/SignIn.js';
import { ApplicantCard } from './Components/ApplicantView.js/ApplicantCard';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={SignIn()} />
          <Route exact path='/applicant' element={ApplicantCard()} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;