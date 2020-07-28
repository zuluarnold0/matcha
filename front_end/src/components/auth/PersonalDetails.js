import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PersonalDetails extends Component {

    render () {
        const { error_msg, firstname, lastname, username, email, password, cpassword, handleChange, onFormSubmit } = this.props;
        return (
            <div className="bg">
                <div className="register-box box__">
                    <h1>PERSONAL DETAILS</h1>
                    <div>
                        <p>First Name</p>
                        <input
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={handleChange}
                            placeholder="Enter First Name..."
                        />
                        <p>Last Name</p>
                        <input
                            type="text"
                            name="lastname"
                            value={lastname}
                            onChange={handleChange}
                            placeholder="Enter Last Name..."
                        />
                        <p>User Name</p>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            placeholder="Enter User Name..."
                        />
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter Your Email..."
                        />
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Enter Your Password..."
                        />
                        <p>Confirm Password</p>
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
