import React from 'react';
//import img_ from '../imgs/4.jpeg';

const ProfileCover = ({ user }) => {
    return (
        <div className="profile__cover">
            <div className="profile__name">{ user.firstname[0].toUpperCase() + user.firstname.slice(1)} { user.lastname[0].toUpperCase() + user.lastname.slice(1) }</div>
            <img src={ user.photourl } alt="img"/>
        </div>
    )
}

export default ProfileCover;
