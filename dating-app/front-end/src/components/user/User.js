import React from 'react';
import './User.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import UserProfile from './UserProfile';

const User = () => {
    return (
        <div>
            <Nav/>
                <UserProfile />
            <Footer/>
        </div>
    )
}

export default User;
