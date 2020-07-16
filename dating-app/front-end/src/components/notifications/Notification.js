import React from 'react';
import './Notification.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NotificationDetails from './NotificationDetails';

class Notification extends React.Component {

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

    render() {
        const { user, users } = this.state;
        if (!user) {
            return <Redirect to="/login" />
        } else {
            return (
                <div>
                    <Nav/>
                    {
                        (!users.length) ?
                            <div id="dot-loader">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        :
                        <NotificationDetails users={users} user={user}/>
                    }
                    <Footer/>     
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

export default connect(mapStateToProps, null)(Notification);
