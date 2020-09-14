import React from 'react';
import './Auth.css';
import imgP from "./images/profile.jpg";
import { Link } from 'react-router-dom';
import { PORT } from '../port/Port';

//reset your password
class Forgot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error_msg: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formIsValid = () => {
        if (!this.state.email) {
            this.setState({ error_msg: 'Email field cannot be empty!' });
            return false;
        } else {
            this.setState({ error_msg: '' });
            return true;
        }
    }

    onFormSubmit = () => {
        if (this.formIsValid())
        {
            fetch(`${PORT}/forgot`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user.email) {
                    this.setState({ error_msg: "Please check your email!"})
                } else {
                    this.setState({ error_msg: "Email not found!"})
                } 
            })
        }
    }

    render() {
        return (
            <div className="bg">
                <div className="register-box box__">
                    <img src={imgP} alt="img" className="avatar"/>
                    <h1>FORGOT PASSWORD</h1>
                    <div>
                        <label htmlFor="email">Email</label><br/>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="Enter Your Email..."
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
                        <br/>
                        <Link className="success__links" to="/login">
                            <span> Go to Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Forgot;
