import React from 'react';
import PasswordForm from '../update/PasswordForm';
import EmailForm from '../update/EmailForm';
import UploadImages from '../update/UploadImages';

class ImportantUpdates extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            cpassword: '',
            passwd_err_message: '',
            email_err_message: ''
        }
    }

    componentDidMount() {
        const { user } = this.props;
        this.setState({
            email: user.email
        })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    validateEmail = () => {
        const { email } = this.state;
        var isEmailValid = false;
        // eslint-disable-next-line
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            isEmailValid = true;
        }

        if (!email) 
        {
            this.setState({ email_err_message: 'Email field cannot be empty!' });
            return false;
        }
        else if (!isEmailValid)
        {
            this.setState({ email_err_message:"Email entered is invalid!" });
            return false;
        }
        else
        {
            this.setState({ email_err_message: '' });
            return true;
        }
    }

    handleEmailSubmit = (event) => {
        event.preventDefault();
        const { email } = this.state;
        if (this.validateEmail()) {
            console.log(email);
        }
    }

    validatePassword = () => {
        const { password, cpassword } = this.state;
        //password validation
        var matchedCase = [];
        matchedCase.push("[$@$!%*#?&]");
        matchedCase.push("[A-Z]");    
        matchedCase.push("[0-9]"); 
        matchedCase.push("[a-z]");
        // Check the conditions
        var ctr = 0;
        for (var i = 0; i < matchedCase.length; i++) {
            if (new RegExp(matchedCase[i]).test(password)) {
                ctr++;
            }
        }
        if (!password || !cpassword) 
        {
            this.setState({ passwd_err_message: 'Password field cannot be empty!' });
            return false;
        }
        else if (password !== cpassword)
        {
            this.setState({ passwd_err_message:'Passwords dont match!' });
            return false;
        }
        else if (ctr !== 4)
        {
            this.setState({ passwd_err_message:"Password must have: [A-Z], [0-9], [a-z] and [$@$!%*#?&]" })
            return false;
        }
        else
        {
            this.setState({ passwd_err_message: '' });
            return true;
        }
    }

    handlePassword = (event) => {
        event.preventDefault();
        const { password } = this.state;
        if (this.validatePassword()) {
            console.log(password);
        }
    }

    render() {
        const { email, email_err_message, passwd_err_message } = this.state;
        const { showEmailModal, showPasswordModal, closePasswordModal, closeEmailModal, updateEmail, updatePassword, closeCityModal, updateCity, showCityModal, closeUploadModal, uploadPics, showUploadModal } = this.props;
        return (
            <div className="important__updates">
                {/*Update Password*/}
                <span className="fas fa-pen"  onClick={updatePassword}><span className="text__">Click to update Password</span></span>
                {
                    showPasswordModal === true ? <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={closePasswordModal} className="close">&times;</span>
                            <div className="update__important">
                                <div className="update__box">
                                    <PasswordForm 
                                        handleInputChange={this.handleInputChange} 
                                        handlePassword={this.handlePassword}
                                        passwd_err_message={passwd_err_message}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    : ""
                }

                {/*Update Email */}
                <br />
                <span className="fas fa-pen"  onClick={updateEmail}><span className="text__">Click to update Email</span></span>
                {
                    showEmailModal === true ? <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={closeEmailModal} className="close">&times;</span>
                            <div className="update__important">
                                <div className="update__box">
                                    <EmailForm 
                                        email={email}
                                        email_err_message={email_err_message}
                                        handleInputChange={this.handleInputChange}
                                        handleEmailSubmit={this.handleEmailSubmit}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    : ""
                }

                {/*Update City*/}
                <br />
                <span className="fas fa-pen"  onClick={updateCity}><span className="text__">Click to update City</span></span>
                {
                    showCityModal === true ? <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={closeCityModal} className="close">&times;</span>
                            <p className="modalMessage">Your location was successfully updated</p>
                        </div>
                    </div>
                    : ""
                }

                {/*Update pics*/}
                <br />
                <span className="fas fa-pen"  onClick={uploadPics}><span className="text__">Click to update Pics</span></span>
                {
                    showUploadModal === true ? <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span onClick={closeUploadModal} className="close">&times;</span>
                            <UploadImages/>
                        </div>
                    </div>
                    : ""
                }
            </div>
        )
    }
}

export default ImportantUpdates;
