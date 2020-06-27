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
            users: props.users
        }
    }

    componentWillUnmount() {
        this.setState({ 
            user: null,
            users: [] 
        })
    }

    render() {
        const { user, users } = this.state;
        if (!user) {
            return <Redirect to="/login" />
        } else {
            return (
                <div>
                    <Nav/>
                        <NotificationDetails users={users} user={user}/>
                    <Footer/>     
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user_reducer.user,
        users: state.users_redu_cer.users
    }
}

export default connect(mapStateToProps, null)(Notification);
