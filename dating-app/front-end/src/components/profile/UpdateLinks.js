import React from 'react';
import UpdateNames from '../update/UpdateNames';
import UpdatePreference from '../update/UpdatePreference';
import UpdateInfo from '../update/UpdateInfo';

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
            error_message: '',
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
            this.setState({ error_message: 'Input field cannot be empty!' });
            return false;
        }
        else
        {
            this.setState({ error_message: '' });
            return true;
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { firstname, lastname, username } = this.state;
        if (this.validateNames()) {
            console.log(firstname, lastname, username);
        }
    }

    validatePref = () => {
        const { age, gender, sexpref } = this.state;
        if (!age || !gender || !sexpref)
        {
            this.setState({ error_message: 'Input field cannot be empty!' });
            return false;
        }
        else if (!(Number(age)))
        {
            this.setState({ error_message: 'Age must be a number!' });
            return false;
        }
        else if (age < 18 || age > 70)
        {
            this.setState({ error_message: 'Age must be between 18 and 70' });
            return false;
        }
        else
        {
            this.setState({ error_message: '' });
            return true;
        }
    }

    handlePrefSubmit = (event) => {
        event.preventDefault();
        const { age, gender, sexpref } = this.state;
        if (this.validatePref()) {
            console.log(age, gender, sexpref);
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
            this.setState({ error_message: 'Bio field cannot be empty!' });
            return false;
        }
        else if (!tags.length)
        {
            this.setState({ error_message: 'Enter atleast one tag!' });
            return false;
        }
        else
        {
            this.setState({ error_message: '' });
            return true;
        }
    }

    handleInfoSubmit = (event) => {
        event.preventDefault();
        const { bio, tags } = this.state;
        if (this.validateInfo()) {
            console.log(bio, tags);
        }
    }

    render() {
        const { bio, tags, age, sexpref, gender, firstname, lastname, username, error_message, invalid_input } = this.state;
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
                                        error_message={error_message}
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
                                        error_message={error_message}
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
                                        error_message={error_message}
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

export default UpdateLinks;
