import React, { Component } from 'react';
import ProfileCover from './ProfileCover';
import UpdateLinks from './UpdateLinks';
import ProfileContent from './ProfileContent';
import UserMap from '../map/UserMap';

class MyProfile extends Component {
    state = {
        show: false,
        showEmailModal: false,
        showPasswordModal: false
    }

    closeModal = () => this.setState({ show: false });

    closeEmailModal = () => this.setState({ showEmailModal: false });

    closePasswordModal = () => this.setState({ showPasswordModal: false });

    updateCity = () => this.setState({ show: true });

    updateEmail = () => this.setState({ showEmailModal: true });

    updatePassword = () => this.setState({ showPasswordModal: true });

    render () {
        return (
            <div>
                <ProfileCover />
                <UpdateLinks
                    show={this.state.show}
                    closeModal={this.closeModal}
                    updateCity={this.updateCity}
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
