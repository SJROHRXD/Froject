import './App.css';
import { Fragment } from 'react';

import { Navbar } from './Components/layout/Navbar';
import { Footer } from './Components/layout/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Footer />
    </Fragment>
  );
}

export default App;
