import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyHistory from './MyHistory';

const ProfileContent = ({ user }) => {
    return (
        <div className="profile__content">
            <ProfileInfo user={user}/>
            <MyHistory user={user}/>
        </div>
    )
}

export default ProfileContent;
