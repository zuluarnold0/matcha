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
import { setUserToState } from '../../store/actions/actions';

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
            city_err_msg: '',
            user: props.user,
            users: props.users
        }
    }

    componentWillUnmount() {
        this.setState({ 
            user: null,
            users: [] 
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            this.setState({ user: this.props.user });
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
    
    closeCityModal = () => this.setState({ showCityModal: false });

    updateCity = () => {
        this.setState({ showCityModal: true });
        //FETCH LOCATION FROM AN API
        fetch('https://ipapi.co/json')
        .then(response => response.json())
        .then(location => {
            //SEND LOCATION DATA TO THE BACKEND
            fetch('http://localhost:3000/city', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.props.user.id,
                    city: location.city,
                    longi: location.longitude,
                    lati: location.latitude
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.setUserToState(user[0]);
                    this.setState({ city_err_msg: 'Your location was successfully updated'})
                } else {
                    this.setState({ city_err_msg: 'Unable to update City'})
                }
            })
        })
        .catch(err => this.setState({ city_err_msg: 'Error updating City'}));
    }

    updatePassword = () => this.setState({ showPasswordModal: true });
    closePasswordModal = () => this.setState({ showPasswordModal: false });

    uploadPics = () => this.setState({ showUploadModal: true });
    closeUploadModal = () => this.setState({ showUploadModal: false });

    onUploadProfile = e => {
        const _id = this.props.user.id;
        const fileToUpload = e.target.files[0];
        const formData = new FormData();

        formData.append(_id, fileToUpload, fileToUpload.name);
        fetch('http://localhost:3000/profile-upload', {
            method: 'POST',
            body: formData
          })
          .then(res => res.json())
          .then(user => {
            if (user) {
                this.props.setUserToState(user[0]);
            }
        })
    }

    render () {
        const { users, user, city_err_msg } = this.state;
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

                        city_err_msg={city_err_msg}
                        user={user}
                        users={users}
                        onUploadProfile={this.onUploadProfile}
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
      user: state.user_reducer.user,
      users: state.users_redu_cer.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserToState: (user) => dispatch(setUserToState(user))
    }    
}
  
export default connect(mapStateToProps, mapDispatchToProps) (MyProfile);
