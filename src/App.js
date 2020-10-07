import React from 'react';
import { InfoSection, Navbar } from './components';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      
    </Router>
  );
}

export default App;
