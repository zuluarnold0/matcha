import React from 'react';
import './Auth.css';
import imgP from "./images/profile.jpg";
import { connect } from 'react-redux';

class Reset extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            cpassword: '',
            error_msg: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formIsValid = () => {
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
            this.setState({ error_msg: 'fill in all fields!' });
            return false;
        }
        else if (password !== cpassword)
        {
            this.setState({ error_msg:'passwords dont match!' });
            return false;
        }
        else if (ctr !== 4)
        {
            this.setState({ error_msg:"Password must have: [A-Z], [0-9], [a-z] and [$@$!%*#?&]" })
            return false;
        }
        else
        {
            this.setState({ error_msg: '' });
            return true;
        }
    }

    onFormSubmit = () => {
        if (this.formIsValid())
        {
            fetch('http://localhost:3000/resetpass', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.props._id,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data === 'success') {
                    this.setState({ error_msg: "password reset success!"})
                } else {
                    this.setState({ error_msg: "password reset error!"})
                } 
            })
        }
    }

    render() {
        return (
            <div className="bg">
                <div className="register-box box__">
                    <img src={imgP} alt="img" className="avatar"/>
                    <h1>RESET PASSWORD</h1>
                    <div>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="Enter Your Password..."
                        />
                        <p>Confirm Password</p>
                        <input
                            type="password"
                            name="cpassword"
                            value={this.state.cpassword}
                            onChange={this.handleInputChange}
                            placeholder="Confirm Your Password..."
                        />
                        <input
                            type="submit"
                            name="submit"
                            value="SUBMIT"
                            onClick={this.onFormSubmit}
                        />
                        {
                            this.state.error_msg ? <p className="error__msg">
                                { this.state.error_msg }
                            </p> : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        _id: ownProps.match.params.id
    }    
}

export default connect(mapStateToProps, null) (Reset);