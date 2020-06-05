import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyHistory from './MyHistory';

const ProfileContent = () => {
    return (
        <div className="profile__content">
            <ProfileInfo />
            <MyHistory />
        </div>
    )
}

export default ProfileContent;
