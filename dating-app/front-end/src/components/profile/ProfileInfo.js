import React from 'react';
import Bio from '../bio/Bio';
import  ImageUpload from '../upload/ImageUpload';

const ProfileInfo = () => {
    return (
        <div className="logged-details">
            <div className="logged_info">
                <ImageUpload />
                <div className="user__info">
                    <Bio />
                    <span className="info__key"><span className="fas fa-envelope"></span></span><span className="info__value">{ email }</span><br/>
                </div>
            </div>
            <div className="profile__imgs">
                <img src={ img_ } alt="img"/>
                <img src={ img_ } alt="img"/>
                <img src={ img_ } alt="img"/>
                <img src={ img_ } alt="img"/>
            </div>
        </div>
    )
}

export default ProfileInfo;
