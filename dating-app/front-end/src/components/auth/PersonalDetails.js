import React, { Component } from 'react';
import imgP from "./images/profile.jpg";

class PersonalDetails extends Component {
    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }
    render () {
        const { firstname, lastname, username, email, password, cpassword, handleChange } = this.props;
        return (
            <div className="bg">
                <div className="register-box box__">
                    <img src={imgP} alt="img" className="avatar"/>
                    <h1>PERSONAL DETAILS</h1>
                    <form>
                        <p>First Name</p>
                        <input
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={handleChange}
                            placeholder="Enter FirstName..."
                        />
                        <p>Last Name</p>
                        <input
                            type="text"
                            name="lastname"
                            value={lastname}
                            onChange={handleChange}
                            placeholder="Enter LastName..."
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
                            value="CONTINUE"
                            onClick={this.continue}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default PersonalDetails;
