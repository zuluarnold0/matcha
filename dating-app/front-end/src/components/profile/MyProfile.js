import React, { Component } from 'react';
import ProfileCover from './ProfileCover';
import UpdateLinks from './UpdateLinks';
import ProfileContent from './ProfileContent';
import UserMap from '../map/UserMap';

class MyProfile extends Component {
    state = {
        showNamesModal: false,
        showInfoModal: false,
        showCityModal: false,
        showEmailModal: false,
        showPasswordModal: false,
        showUploadModal: false,
        showPrefModal: false,
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
        return (
            <div>
                <ProfileCover />
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
                />
                <UserMap />
            </div>
        )
    }
}

export default MyProfile;
