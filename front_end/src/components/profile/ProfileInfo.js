import React from 'react';
import  ImageUpload from '../upload/ImageUpload';
import ImportantUpdates from './ImportantUpdates';
import Bio from '../sharedComponents/bio/Bio';
import { connect } from 'react-redux';
import { setUserToState } from '../../store/actions/actions';
import { PORT } from '../port/Port';

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            showUploadModal: false,
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        const { user } = props;
        this.setState({ user: user })
    }

    uploadPic = () => this.setState({ showUploadModal: true });
    closeUploadModal = () => this.setState({ showUploadModal: false });

    onUploadProfile = e => {
        const _id = this.state.user.id;
        const formData = new FormData();
        let fileToUpload = null;
        fileToUpload = e.target.files[0];

        if (fileToUpload) {
            //open modal
            this.uploadPic();
            formData.append(_id, fileToUpload, fileToUpload.name);
            fetch(`${PORT}/profile-upload`, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(user => {
                if (user) {
                    this.props.setUserToState(user[0]);
                }
            })
            .catch(error => console.err(error));
            //close modal
            this.closeUploadModal();
        }
    }

    render() {
        const { user, showUploadModal } = this.state;
        return (
            <div  className="profile_info_box">
                <div className="profile__info">
                    <ImageUpload onUploadProfile={this.onUploadProfile} />
                    {
                        showUploadModal === true ? <div id="myModal" className="modal">
                            <div className="modal-content">
                                <p className="modalMessage"> Profile image uploading.............</p>
                            </div>
                        </div>
                        : ""
                    }
                    <div className="user__info">
                        <Bio user={user} />
                        <hr/>
                        <span className="info__key">
                            <span className="fas fa-envelope"></span>
                        </span>
                        <span className="info__value"> { user.email }</span><br/>
                        <hr />
                    </div>
                </div>
                <ImportantUpdates user={user}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserToState: (user) => dispatch(setUserToState(user))
    }    
}
  
export default connect(null, mapDispatchToProps) (ProfileInfo);
