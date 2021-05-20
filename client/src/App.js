import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from './pages/landing';
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';
import Login from './pages/login';

import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
