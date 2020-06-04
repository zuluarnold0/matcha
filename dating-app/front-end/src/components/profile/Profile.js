import React from 'react';
import './Profile.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import MyProfile from "./MyProfile";

const Profile = () => {
    return (
        <div>
            <Nav/>
            <MyProfile />
            <Footer/>   
        </div>
    )
}

export default Profile;
