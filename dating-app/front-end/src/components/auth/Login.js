import React from 'react';
import './Auth.css';
import imgP from "./images/profile.jpg";
import { Link } from 'react-router-dom';

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        error_msg: ''
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formIsValid = () => {
        if (!this.state.email || !this.state.password)
        {
            this.setState({ error_msg: 'fill in all fields!' });
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
            fetch('http://localhost:3000/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
        }
    }
    render() {
        return (
            <div className="bg">
                <div className="register-box">
                    <img src={imgP} alt="img" className="avatar"/>
                    <h1>LOGIN TO MATCHA</h1>
                    <div>
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="Enter Your Email..."
                        />
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="Enter Your Password..."
                        />
                        <input
                            type="submit"
                            name="submit"
                            value="LOGIN"
                            onClick={this.onFormSubmit}
                        />
                        <Link className="a__links" to="/forgot"><span>Forgot Password?</span></Link><br/>
                        <Link className="a__links" to="/register"><span>Don't have an account?</span></Link><br/>
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
export default Login;
