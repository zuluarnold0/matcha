import React from 'react';
import './DashBoard.css';
import Footer from '../footer/Footer';
import AppHeader from './AppHeader';
import AppSideBar from './AppSideBar';
import { Redirect } from 'react-router-dom';
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
        //make fetch request to database to get users
        this.usersAdder = setInterval(() => {
            fetch('http://localhost:3000/')
            .then(response => response.json())
            .then(users_ => {
                if (users_) {
                    this.setState({ users: users_ });
                }
            })
            .catch(err => console.log('an error occured'));
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.usersAdder);
    }

    render () {
        const { user, users } = this.state;
        if (!user) {
            return <Redirect to="/login" />;
        } else {
            return (
                <div>
                    <input type="checkbox" id="check" />
                    <AppHeader/>
                    <AppSideBar user={user}/>
                    <div className="content">
                        <DashContent users={users} user={user}/>
                    </div>
                    <Footer />
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

export default connect(mapStateToProps, null)(DashBoard);