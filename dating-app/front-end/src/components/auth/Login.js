import React from 'react';
import './Auth.css';
import imgP from "./images/profile.jpg";

const Login = ({ onRouteChange }) => {
    return (
        <div className="bg">
            <div className="register-box">
                <img src={imgP} alt="img" className="avatar"/>
                <h1>LOGIN TO MATCHA</h1>
                <form>
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
                    <input
                        type="submit"
                        name="submit"
                        value="LOGIN"
                        onClick={() => onRouteChange("app")}
                    />
                    <span onClick={() => onRouteChange("forgot")}>Forgot Password?</span><br/>
                    <span onClick={() => onRouteChange("register")}>Don't have an account?</span><br/>
                </form>
            </div>
        </div>
    )
}

export default Login;
