import React from 'react';
import UpdateNames from '../update/UpdateNames';
import UpdatePreference from '../update/UpdatePreference';
import UpdateInfo from '../update/UpdateInfo';
import { connect } from 'react-redux';
import { setUserToState } from '../../store/actions/actions';

const containerStyle = {
    position: "relative",
    display: "inline-block",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    width: "100%",
    overflow: "auto",
    borderBottom: "1px solid #ccc"
}

const inputStyle = {
    display: "inline-block",
    color: "#000",
    fontSize: "14px",
    margin: "3px",
    border: "0"
}

class UpdateLinks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            info_err_msg: '',
            names_err_msg: '',
            pref_err_msg: '',
            age: '',
            gender: '',
            sexpref: '',
            bio: '',
            tags: [],
            invalid_input: ""
        }
    }

    componentDidMount() {
        const { user } = this.props;
        this.setState({
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            age: user.age,
            gender: user.gender,
            sexpref: user.sexpref,
            bio: user.bio,
            tags: user.tags
        })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    validateNames = () => {
        const { firstname, lastname, username } = this.state;
        if (!firstname || !lastname || !username)
        {
            this.setState({ names_err_msg: 'Input field cannot be empty!' });
            return false;
        }
        else
        {
            this.setState({ names_err_msg: '' });
            return true;
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { firstname, lastname, username } = this.state;
        if (this.validateNames()) {
            fetch('http://localhost:3000/names', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.props.user.id,
                    firstname: firstname,
                    lastname: lastname,
                    username: username
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.setUserToState(user[0]);
                    this.setState({ names_err_msg: "Names update successful" });
                } else {
                    this.setState({ names_err_msg: "Error updating names"})
                }
            })
        }
    }

    validatePref = () => {
        const { age, gender, sexpref } = this.state;
        if (!age || !gender || !sexpref)
        {
            this.setState({ pref_err_msg: 'Input field cannot be empty!' });
            return false;
        }
        else if (!(Number(age)))
        {
            this.setState({ pref_err_msg: 'Age must be a number!' });
            return false;
        }
        else if (age < 18 || age > 70)
        {
            this.setState({ pref_err_msg: 'Age must be between 18 and 70' });
            return false;
        }
        else
        {
            this.setState({ pref_err_msg: '' });
            return true;
        }
    }

    handlePrefSubmit = (event) => {
        event.preventDefault();
        const { age, gender, sexpref } = this.state;
        if (this.validatePref()) {
            fetch('http://localhost:3000/pref', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.props.user.id,
                    age: age,
                    gender: gender,
                    sexpref: sexpref
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.setUserToState(user[0]);
                    this.setState({ pref_err_msg: "Preference update successful" });
                } else {
                    this.setState({ pref_err_msg: "Error updating preferences"})
                }
            })
        }
    }

    onKeyUp = (e) => {
        if (e.which === 32) {
            let input = e.target.value.trim().split(" ");
            if (input.length === 0 || input[0] === "") return;
            if (input[0].toLowerCase() !== "gym" && input[0].toLowerCase() !== "art" && input[0].toLowerCase() !== "music" && input[0].toLowerCase() !== "photography" && input[0].toLowerCase() !== "coding"){
                this.setState({ invalid_input: "Choose a valid tag!" });
                return;
            }
            this.state.tags.includes(input[0].toLowerCase()) ?
            this.setState({ invalid_input: "Please choose another tag!" })
             :
            this.setState({
                tags: [ ...this.state.tags, input[0].toLowerCase() ], invalid_input: ""
            })
            e.target.value = "";
        }
    }

    onDeleteTag = (tag) => {
        var tags = this.state.tags.filter(t => t !== tag);
        this.setState({ tags: tags });
    }

    validateInfo = () => {
        const { bio, tags } = this.state;
        if (!bio)
        {
            this.setState({ info_err_msg: 'Bio field cannot be empty!' });
            return false;
        }
        else if (!tags.length)
        {
            this.setState({ info_err_msg: 'Enter atleast one tag!' });
            return false;
        }
        else
        {
            this.setState({ info_err_msg: '' });
            return true;
        }
    }

    handleInfoSubmit = (event) => {
        event.preventDefault();
        const { bio, tags } = this.state;
        if (this.validateInfo()) {
            fetch('http://localhost:3000/info', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.props.user.id,
                    bio: bio,
                    tags: tags
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.setUserToState(user[0]);
                    this.setState({ info_err_msg: "Info update successful" });
                } else {
                    this.setState({ info_err_msg: "Error updating Info"})
                }
            })
        }
    }

    render() {
        const { bio, tags, age, sexpref, gender, firstname, lastname, username, info_err_msg, pref_err_msg, names_err_msg, invalid_input } = this.state;
        const { showNamesModal, updateNames, closeNamesModal, showPrefModal, updatePref, closePrefModal, showInfoModal, updateInfo, closeInfoModal } = this.props;
        return (
            <div className="links__bar">
                {/* UPDATE NAMES */}
                <button type="button" className="edit__profile" onClick={updateNames}>
                    <span className="fas fa-pen">names</span> 
                </button>
                {
                    showNamesModal === true ? <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span onClick={closeNamesModal} className="close">&times;</span>
                            <div className="update__important">
                                <div className="update__box">
                                    <UpdateNames 
                                        firstname={firstname}
                                        lastname={lastname}
                                        username={username}
                                        handleFormSubmit={this.handleFormSubmit}
                                        names_err_msg={names_err_msg}
                                        handleInputChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    : ""
                }

                {/* Update Preference */}
                <button type="button" className="edit__profile" onClick={updatePref}>
                    <span className="fas fa-pen">pref</span>  
                </button>
                {
                    showPrefModal === true ? <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span onClick={closePrefModal} className="close">&times;</span>
                            <div className="update__important">
                                <div className="update__box">
                                    <UpdatePreference
                                        age={age}
                                        gender={gender}
                                        sexpref={sexpref}
                                        handlePrefSubmit={this.handlePrefSubmit}
                                        pref_err_msg={pref_err_msg}
                                        handleInputChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    : ""
                }

                {/*Update Info*/}
                <button type="button" className="edit__profile" onClick={updateInfo}>
                    <span className="fas fa-pen">info</span>  
                </button>
                {
                    showInfoModal === true ? <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span onClick={closeInfoModal} className="close">&times;</span>
                            <div className="update__important">
                                <div className="update__box">
                                    <UpdateInfo
                                        bio={bio}
                                        containerStyle={containerStyle}
                                        inputStyle={inputStyle}
                                        onDeleteTag={this.onDeleteTag}
                                        onKeyUp={this.onKeyUp}
                                        invalid_input={invalid_input}
                                        tags={tags}
                                        handleInfoSubmit={this.handleInfoSubmit}
                                        info_err_msg={info_err_msg}
                                        handleInputChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    : ""
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserToState: (user) => dispatch(setUserToState(user))
    }    
}

export default connect (null, mapDispatchToProps) (UpdateLinks);
