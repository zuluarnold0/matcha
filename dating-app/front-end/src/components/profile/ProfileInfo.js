import React from 'react';
import Bio from '../bio/Bio';
import  ImageUpload from '../upload/ImageUpload';
import img_ from '../imgs/4.jpeg';
import ImportantUpdates from './ImportantUpdates';

const ProfileInfo = ({ showEmailModal, showPasswordModal, closePasswordModal, closeEmailModal, updateEmail, updatePassword }) => {
    return (
        <div  className="profile_info_box">
            <div className="profile__info">
                <ImageUpload />
                <div className="user__info">
                    <Bio />
                    <span className="info__key"><span className="fas fa-envelope"></span></span><span className="info__value"> star@gmail.com</span><br/>
                    <hr />
                </div>
            </div>
            <ImportantUpdates
                showPasswordModal={showPasswordModal}
                showEmailModal={showEmailModal}
                closeEmailModal={closeEmailModal}
                closePasswordModal={closePasswordModal}
                updateEmail={updateEmail}
                updatePassword={updatePassword}
            />
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
