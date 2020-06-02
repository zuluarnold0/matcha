import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashBoard from './dashboard/DashBoard';

const App = () => {
    return (
      <Router>
        <div>
            <Switch>
              <Route exact path="/" component={DashBoard} />
            </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;
