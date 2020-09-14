import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
const User = lazy(() => import('./user/User'));
const Login = lazy(() => import('./auth/Login'));
const Reset = lazy(() => import('./auth/Reset'));
const Verify = lazy(() => import('./auth/Verify'));
const Forgot = lazy(() => import('./auth/Forgot'));
const Chats = lazy(() => import('./chat/client/Chats'));
const Chat = lazy(() => import('./chat/client/Chat'));
const Register = lazy(() => import('./auth/Register'));
const MyProfile = lazy(() => import('./profile/MyProfile'));
const DashBoard = lazy(() => import('./dashboard/DashBoard'));
const PageNotFound = lazy(() => import('./extendedProfile/PageNotFound'));
const Notification = lazy(() => import('../components/notifications/Notification'));

const App = () => {
  return (
    <Suspense fallback={
      <div id="dot-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      }
      >
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
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
