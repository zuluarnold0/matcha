import React, { Component } from 'react';
import ProfileCover from './ProfileCover';
import UpdateLinks from './UpdateLinks';
import ProfileContent from './ProfileContent';
import UserMap from '../map/UserMap';

class MyProfile extends Component {
    state = {
        show: false,
        showEmailModal: false,
        showPasswordModal: false,
        showUpload: false
    }

    closeModal = () => this.setState({ show: false });

    closeEmailModal = () => this.setState({ showEmailModal: false });

    closePasswordModal = () => this.setState({ showPasswordModal: false });

    closeUploadModal = () => this.setState({ showUpload: false });

    updateCity = () => this.setState({ show: true });

    updateEmail = () => this.setState({ showEmailModal: true });

    updatePassword = () => this.setState({ showPasswordModal: true });

    uploadPics = () => this.setState({ showUpload: true });

    render () {
        return (
            <div>
                <ProfileCover />
                <UpdateLinks
                    show={this.state.show}
                    closeModal={this.closeModal}
                    updateCity={this.updateCity}
                    showUpload={this.state.showUpload}
                    closeUploadModal={this.closeUploadModal}
                    uploadPics={this.uploadPics}
                />
                <ProfileContent
                    showPasswordModal={this.state.showPasswordModal}
                    showEmailModal={this.state.showEmailModal}
                    closeEmailModal={this.closeEmailModal}
                    closePasswordModal={this.closePasswordModal}
                    updateEmail={this.updateEmail}
                    updatePassword={this.updatePassword}
                />
                <UserMap />
            </div>
        )
    }
}

export default MyProfile;
