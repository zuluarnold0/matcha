import React from 'react';
import  ImageUpload from '../upload/ImageUpload';
import ImportantUpdates from './ImportantUpdates';
import Bio from '../bio/Bio';
import { connect } from 'react-redux';
import { setUserToState } from '../../store/actions/actions';

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        const { user } = props;
        this.setState({ user: user })
    }

    onUploadProfile = e => {
        const _id = this.state.user.id;
        const formData = new FormData();
        let fileToUpload = null;
        fileToUpload = e.target.files[0];

        if (fileToUpload) {
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
    }

    render() {
        const { user } = this.state;
        return (
            <div  className="profile_info_box">
                <div className="profile__info">
                    <ImageUpload onUploadProfile={this.onUploadProfile} />
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
