import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Hero from './components/hero/hero';
import Footer from './components/footer/footer';

import Dashboard from './pages/dashboard';
import Signup from './pages/signup';
import Login from './pages/login';

import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Hero />
        <Switch>
          <Route exact path='/' component={Signup} />
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
