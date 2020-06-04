import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashBoard from './dashboard/DashBoard';
import User from './user/User';
import Login from './auth/Login';
import Forgot from './auth/Forgot';
import Register from './auth/Register';

const App = ({ onRouteChange }) => {
    return (
      <Router>
        <div>
            <Switch>
              <Route exact path="/" component={DashBoard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgot" component={Forgot} />
              <Route exact path="/user/:id" component={User} />
            </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;
