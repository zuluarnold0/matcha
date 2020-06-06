import React from 'react';
import './Auth.css';
import imgP from "./images/profile.jpg";
import { Link } from 'react-router-dom';

const Login = () => {
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
                    />
                    <Link className="a__links" to="/forgot"><span>Forgot Password?</span></Link><br/>
                    <Link className="a__links" to="/register"><span>Don't have an account?</span></Link><br/>
                </form>
            </div>
        </div>
    )
}

export default Login;
