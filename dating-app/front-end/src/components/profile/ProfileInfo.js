import React from 'react';
import Bio from '../bio/Bio';
import  ImageUpload from '../upload/ImageUpload';
import img_ from '../imgs/4.jpeg';

const ProfileInfo = () => {
    return (
        <div>
            <div className="profile__info">
                <ImageUpload />
                <div className="user__info">
                    <Bio />
                    <span className="info__key"><span className="fas fa-envelope"></span></span><span className="info__value"> star@gmail.com</span><br/>
                    <hr />
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
