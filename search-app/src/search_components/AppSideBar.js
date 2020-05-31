import React from 'react';
import { profile } from './Profile';

const AppSideBar = () => {
    return (
        <div className="sidebar">
            <center>
                <img src={ profile.url } className="profile_image" alt="img" />
                <h4>{ profile.name }</h4>
            </center>
            <p><i className="fas fa-house-user"></i><span>Home</span></p>
            <p><i className="fas fa-user-circle"></i><span>Profile</span></p>
            <p><i className="fas fa-envelope"></i><span>Messages</span></p>
            <p><i className="fas fa-bell"></i><span>Notifications</span></p>
        </div>
    )
}

export default AppSideBar;
