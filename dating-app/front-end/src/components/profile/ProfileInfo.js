import React from 'react';
import  ImageUpload from '../upload/ImageUpload';
import ImportantUpdates from './ImportantUpdates';
import Bio from '../bio/Bio';

const ProfileInfo = ({ user, showEmailModal, showPasswordModal, showUploadModal, showCityModal, closeEmailModal, closePasswordModal, closeUploadModal, closeCityModal, updateEmail, updatePassword, uploadPics, updateCity, city_err_msg }) => {
    return (
        <div  className="profile_info_box">
            <div className="profile__info">
                <ImageUpload />
                <div className="user__info">
                    <Bio user={user} />
                    <hr/>
                    <span className="info__key"><span className="fas fa-envelope"></span></span><span className="info__value"> { user.email }</span><br/>
                    <hr />
                </div>
            </div>
            <ImportantUpdates
                closeEmailModal={closeEmailModal}
                showEmailModal={showEmailModal}
                updateEmail={updateEmail}
                    
                closePasswordModal={closePasswordModal}
                showPasswordModal={showPasswordModal}
                updatePassword={updatePassword}

                updateCity={updateCity}
                showCityModal={showCityModal}
                closeCityModal={closeCityModal}

                uploadPics={uploadPics}
                showUploadModal={showUploadModal}
                closeUploadModal={closeUploadModal}

                city_err_msg={city_err_msg}
                user={user}
            />
        </div>
    )
}

export default ProfileInfo;
