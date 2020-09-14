import React from 'react';
import './Auth.css';
import imgP from "./images/profile.jpg";
import { Link, Redirect } from 'react-router-dom';
import { setUserToState } from '../../store/actions/actions';
import { connect } from 'react-redux';
import { PORT } from '../port/Port';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error_msg: '',
            user: null
        }
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
            fetch(`${PORT}/login`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(user => {
                if (user.email) {
                    //set user to global state
                    this.props.setUserToState(user);
                    this.setState({ user: user });

                } else {
                    this.setState({ error_msg: "Make sure your email is verified and your details are correct!"})
                } 
            })
        }
    }

    render() {
        const { user } = this.state;
        if (!user) {
            return (
                <div className="bg">
                    <div className="register-box box__">
                        <img src={imgP} alt="img" className="avatar"/>
                        <h1>LOGIN TO MATCHA</h1>
                        <div>
                            <label htmlFor="email">Email</label><br/>
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                placeholder="Enter Your Email..."
                            />
                            <label htmlFor="password">Password</label><br/>
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
                            {
                                this.state.error_msg ? <p className="error__msg">
                                    { this.state.error_msg }
                                </p> : ''
                            }
                            <Link className="success__links" to="/forgot">
                                <span>Forgot Password?</span>
                            </Link><br/>
                            <Link className="success__links" to="/register">
                                <span>Don't have an account?</span>
                            </Link><br/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Redirect to="/"/>;
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserToState: (user) => dispatch(setUserToState(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);
