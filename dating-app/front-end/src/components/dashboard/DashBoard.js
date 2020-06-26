import React from 'react';
import './DashBoard.css';
import Footer from '../footer/Footer';
import AppHeader from './AppHeader';
import AppSideBar from './AppSideBar';
import { Redirect } from 'react-router-dom';
import { setUsers } from '../../store/actions/actions';
import { connect } from 'react-redux';
import DashContent from './DashContent';

class DashBoard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            users: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(users => {
            if (users) {
                this.props.setUsers(users);
                this.setState({ users: users });
            }
        })
        .catch(err => console.log('an error occured'));
    }

    render () {
        const { user, users } = this.state;
        if (!user) {
            return <Redirect to="/login" />
        } else {
            return (
                <div>
                    <input type="checkbox" id="check" />
                    <AppHeader/>
                    <AppSideBar user={user}/>
                    <div className="content">
                        <DashContent users={users} user={user}/>
                        <Footer />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
      user: state.user_reducer.user
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      setUsers: (users) => dispatch(setUsers(users))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);