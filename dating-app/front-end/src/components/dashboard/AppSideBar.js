import React from 'react';
//import img_ from '../imgs/4.jpeg';
import { Link } from 'react-router-dom';

const AppSideBar = ({ user }) => {
    console.log(user.photourl);
    return (
        <div className="sidebar">
            <center>
                <img src={ user.photourl } className="profile_image" alt="img" />
                <h4>{ user.username }</h4>
            </center>
            <Link style={{ textDecoration: 'none' }} to="/"><p><i className="fas fa-house-user"></i><span>Home</span></p></Link>
            <Link style={{ textDecoration: 'none' }} to="/profile"><p><i className="fas fa-user-circle"></i><span>Profile</span></p></Link>
            <Link style={{ textDecoration: 'none' }} to="/chat"><p><i className="fas fa-envelope"></i><span>Messages</span></p></Link>
            <Link style={{ textDecoration: 'none' }} to="/notification"><p><i className="fas fa-bell"></i><span>Notifications</span></p></Link>
        </div>
    )
}

export default AppSideBar;