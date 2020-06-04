import React from 'react';
import img_ from '../imgs/4.jpeg';

const ProfileCover = () => {
    return (
        <div className="profile__cover">
            <div className="profile__name">Arnold Zulu</div>
            <img src={img_} alt="img"/>
        </div>
    )
}

export default ProfileCover;
