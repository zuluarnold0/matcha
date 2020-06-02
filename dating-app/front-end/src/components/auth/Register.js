import React from 'react';
import './Auth.css';
import imgP from "./images/profile.jpg";

const Register = ({ onRouteChange }) => {
    return (
        <div className="bg">
        <div className="register-box">
            <img src={imgP} alt="img" className="avatar"/>
            <h1>REGISTER</h1>
            <form>
                <p>First Name</p>
                <input
                    type="text"
                    name="firstname"
                    placeholder="Enter FirstName..."
                />
                <p>Last Name</p>
                <input
                    type="text"
                    name="lastname"
                    placeholder="Enter LastName..."
                />
                <p>User Name</p>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter User Name..."
                />
                <p>Email</p>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email..."
                />
                <p>Password</p>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password..."
                />
                <p>Confirm Password</p>
                <input
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Your Password..."
                />
                <input
                    type="submit"
                    name="submit"
                    value="REGISTER"
                    onClick={() => onRouteChange("app")}
                />
                <span onClick={() => onRouteChange("forgot")}>Forgot Password?</span><br/>
                <span onClick={() => onRouteChange("login")}>Already a member?</span><br/>
            </form>
        </div>
    </div>
    )
}

export default Register;
