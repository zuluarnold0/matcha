import React, { Component } from 'react';
import ProfileCover from './ProfileCover';
import UpdateLinks from './UpdateLinks';
import ProfileContent from './ProfileContent';
import UserMap from '../map/UserMap';
import './Profile.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class MyProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showNamesModal: false,
            showInfoModal: false,
            showCityModal: false,
            showEmailModal: false,
            showPasswordModal: false,
            showUploadModal: false,
            showPrefModal: false,
            user: props.user
        }
    }

    upateNames = () => this.setState({ showNamesModal: true });
    closeNamesModal = () => this.setState({ showNamesModal: false });

    updatePref = () => this.setState({ showPrefModal: true });
    closePrefModal = () => this.setState({ showPrefModal: false });

    updateInfo = () => this.setState({ showInfoModal: true });
    closeInfoModal = () => this.setState({ showInfoModal: false });

    updateEmail = () => this.setState({ showEmailModal: true });
    closeEmailModal = () => this.setState({ showEmailModal: false });

    updateCity = () => this.setState({ showCityModal: true });
    closeCityModal = () => this.setState({ showCityModal: false });

    updatePassword = () => this.setState({ showPasswordModal: true });
    closePasswordModal = () => this.setState({ showPasswordModal: false });

    uploadPics = () => this.setState({ showUploadModal: true });
    closeUploadModal = () => this.setState({ showUploadModal: false });

    render () {
        const { user } = this.state;
        if (!user) {
            return <Redirect to="/login" />
        } else {
            return (
                <div>
                    <Nav/>
                    <ProfileCover user={user}/>
                    <UpdateLinks
                        showInfoModal={this.state.showInfoModal}
                        closeInfoModal={this.closeInfoModal}
                        updateInfo={this.updateInfo}

                        showPrefModal={this.state.showPrefModal}
                        closePrefModal={this.closePrefModal}
                        updatePref={this.updatePref}

                        showNamesModal={this.state.showNamesModal}
                        closeNamesModal={this.closeNamesModal}
                        updateNames={this.upateNames}

                        user={user}
                    />
                    <ProfileContent
                        closeEmailModal={this.closeEmailModal}
                        showEmailModal={this.state.showEmailModal}
                        updateEmail={this.updateEmail}
                        
                        closePasswordModal={this.closePasswordModal}
                        showPasswordModal={this.state.showPasswordModal}
                        updatePassword={this.updatePassword}

                        updateCity={this.updateCity}
                        showCityModal={this.state.showCityModal}
                        closeCityModal={this.closeCityModal}

                        uploadPics={this.uploadPics}
                        showUploadModal={this.state.showUploadModal}
                        closeUploadModal={this.closeUploadModal}

                        user={user}
                    />
                    <UserMap user={user}/>
                    <Footer/> 
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
      user: state.user_reducer.user
    }
}
  
export default connect(mapStateToProps, null) (MyProfile);

/*

                firstname: props.user.firstname,
                lastname: props.user.lastname,
                username: props.user.username,
                email: props.user.email,
                gender: props.user.gender,
                sexpref: props.user.sexpref,
                age: props.user.age,
                bio: props.user.bio,
                tags: props.user.tags,
                city: props.user.city,
                longi: props.user.longi,
                lati: props.user.lati,
                popularity: props.user.popularity,
                logged_time: props.user.logged_time,
                is_logged_in: props.user.is_logged_in,
                photourl: props.user.photourl,
                img1: props.user.img1,
                img2: props.user.img2,
                img3: props.user.img3,
                img4: props.user.img4
                */