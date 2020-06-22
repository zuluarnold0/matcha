import React from 'react';
import img_ from '../imgs/4.jpeg';
import  ImageUpload from '../upload/ImageUpload';
import ImportantUpdates from './ImportantUpdates';

const ProfileInfo = ({ user, showEmailModal, showPasswordModal, showUploadModal, showCityModal, closeEmailModal, closePasswordModal, closeUploadModal, closeCityModal, updateEmail, updatePassword, uploadPics, updateCity }) => {
    return (
        <div  className="profile_info_box">
            <div className="profile__info">
                <ImageUpload />
                <div className="user__info">
                    <span className="info__key"><span className="fas fa-user"></span> </span><span className="info__value"> { user.username } </span><br/>
                    <span className="info__key"><span className="fas fa-venus-mars"></span> </span><span className="info__value"> { user.gender } </span><br/>
                    <span className="info__key"><span className="fas fa-history"></span> </span><span className="info__value"> { user.age } years</span><br/>
                    <span className="info__key"><span className="fas fa-heart"></span> </span><span className="info__value">{ user.sexpref }</span><br/>
                    <span className="info__key"><span className="fas fa-star"></span> </span><span className="info__value">{ user.popularity }</span><br/>
                    <span className="info__key"><span className="fas fa-map-marker-alt"></span> </span><span className="info__value">{ user.city }</span><br/>
                    <span className="info__key"><span className="fas fa-signal"></span> </span><span className="status__value">Online</span><br/>
                    <hr/>
                    <span className="info__key"></span><span className="user__bio">{ user.bio }</span><br/>
                    <hr/>
                    <span className="info__key"><span className="fas fa-tags"></span></span>{" "}
                    {
                        user.tags && user.tags.map(tag => {
                            return <span className="user__tag" key={tag}> { tag } </span>;
                        })
                    }
                    <hr/>
                    <div className="profile__imgs">
                        <img src={ img_ } alt="img"/>
                        <img src={ img_ } alt="img"/>
                        <img src={ img_ } alt="img"/>
                        <img src={ img_ } alt="img"/>
                    </div>
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
            />
        </div>
    )
}

export default ProfileInfo;
