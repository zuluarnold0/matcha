import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashBoard from './dashboard/DashBoard';
import User from './user/User';
import Login from './auth/Login';
import Forgot from './auth/Forgot';
import Chats from './chat/client/Chats';
import Chat from './chat/client/Chat';
import Register from './auth/Register';
import MyProfile from './profile/MyProfile';
import Notification from '../components/notifications/Notification';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/chats" component={Chats} />
        <Route path="/chat" component={Chat} />
        {/*<Route path="/chat/:id" component={Chat} />*/}
        <Route path="/user/:id" component={User} />
        <Route path="/profile" component={MyProfile} />
        <Route path="/notification" component={Notification} />
      </Switch>
    </Router>
  );
}

export default App;
