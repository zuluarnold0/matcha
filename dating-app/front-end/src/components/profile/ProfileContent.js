import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyHistory from './MyHistory';

const ProfileContent = () => {
    return (
        <div className="logged-visits">
            <ProfileInfo />
            <MyHistory />
        </div>
    )
}

export default ProfileContent;
