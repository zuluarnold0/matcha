import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashBoard from './dashboard/DashBoard';
import User from './user/User';
import Login from './auth/Login';
import Forgot from './auth/Forgot';
import Register from './auth/Register';
import Profile from './profile/Profile';
import UpdateProfile from './update/UpdateProfile';
import UploadImages from './update/UploadImages';
import Notification from '../components/notifications/Notification';

const App = () => {
    return (
      <Router>
        <div>
            <Switch>
              <Route exact path="/" component={DashBoard} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/user/:id" component={User} />
              <Route path="/profile" component={Profile} />
              <Route path="/update/:id" component={UpdateProfile} />
              <Route path="/upload/:id" component={UploadImages} />
              <Route path="/notification" component={Notification} />
            </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;
