import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PersonalDetails extends Component {

    render () {
        const { error_msg, firstname, lastname, username, email, password, cpassword, handleChange, onFormSubmit } = this.props;
        return (
            <div className="bg">
                <div className="register-box box__">
                    <h1>REGISTER TO MATCHA</h1>
                    <div>
                        <label htmlFor="firstname">First Name</label><br/>
                        <input
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={handleChange}
                            placeholder="Enter First Name..."
                        />
                        <label htmlFor="lastname">Last Name</label><br/>
                        <input
                            type="text"
                            name="lastname"
                            value={lastname}
                            onChange={handleChange}
                            placeholder="Enter Last Name..."
                        />
                        <label htmlFor="username">User Name</label><br/>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            placeholder="Enter User Name..."
                        />
                        <label htmlFor="email">Email</label><br/>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter Your Email..."
                        />
                        <label htmlFor="password">Password</label><br/>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Enter Your Password..."
                        />
                        <label htmlFor="confirm_password">Confirm Password</label><br/>
                        <input
                            type="password"
                            name="cpassword"
                            value={cpassword}
                            onChange={handleChange}
                            placeholder="Confirm Your Password..."
                        />
                        <input
                            type="submit"
                            name="submit"
                            value="REGISTER"
                            onClick={onFormSubmit}
                        />
                        <br/>
                        {
                            error_msg ? <p className="error__msg">
                                { error_msg }
                            </p> : ''
                        }
                        <Link className="success__links" to="/login">
                            <span>Go to Login</span>
                        </Link><br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalDetails;
