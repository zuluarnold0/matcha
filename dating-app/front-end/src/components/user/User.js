import React, { Component } from 'react';
import './User.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import UserProfile from './UserProfile';

class User extends Component {
    state = {
        show: false  
    }

    closeModal = () => this.setState({ show: false });

    reportUser = () => this.setState({ show: true });

    render () {
        return (
            <div>
                <Nav/>
                    <UserProfile
                        show={this.state.show}
                        closeModal={this.closeModal}
                        reportUser={this.reportUser}
                    />
                <Footer/>
            </div>
        )
    }
}

export default User;
