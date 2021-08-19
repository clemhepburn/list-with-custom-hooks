import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home'
import Header from '../Header'
import Villagers from '../../containers/Villagers';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/villagers" component={Villagers} />
        </Switch>
      </Router>
    </>
  );
}
