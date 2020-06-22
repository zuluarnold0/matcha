import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashBoard from './dashboard/DashBoard';
import User from './user/User';
import Login from './auth/Login';
import Forgot from './auth/Forgot';
import Register from './auth/Register';
import MyProfile from './profile/MyProfile';
import { connect } from 'react-redux';
import Notification from '../components/notifications/Notification';

class App extends React.Component {

  state = {
    user: this.props.user
  }

  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/">
              <DashBoard user={this.props.user}/>
            </Route>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/user/:id" component={User} />
            <Route path="/profile" component={MyProfile} />
            <Route path="/notification" component={Notification} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user_reducer.user
  }
}

export default connect(mapStateToProps, null)(App);
