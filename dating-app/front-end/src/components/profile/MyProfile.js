import React from 'react';
import ProfileCover from './ProfileCover';
import UpdateLinks from './UpdateLinks';
import ProfileContent from './ProfleContent';
import UserMap from '../map/UserMap';

const MyProfile = () => {
    return (
        <div>
            <ProfileCover />
            <UpdateLinks />
            <ProfileContent />
            <UserMap />
        </div>
    )
}

export default MyProfile;
