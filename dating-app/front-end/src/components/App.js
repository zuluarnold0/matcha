import React from 'react';
import './App.css';
import User from './user/User';
import Login from './auth/Login';
import Reset from './auth/Reset';
import Verify from './auth/Verify';
import Forgot from './auth/Forgot';
import Chats from './chat/client/Chats';
import Chat from './chat/client/Chat';
import Register from './auth/Register';
import MyProfile from './profile/MyProfile';
import DashBoard from './dashboard/DashBoard';
import Notification from '../components/notifications/Notification';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/verify" component={Verify} />
        <Route path="/reset/:id" component={Reset} />
        <Route path="/chats" component={Chats} />
        <Route path="/chat/:id" component={Chat} />
        <Route path="/user/:id" component={User} />
        <Route path="/profile" component={MyProfile} />
        <Route path="/notification" component={Notification} />
      </Switch>
    </Router>
  );
}

export default App;
