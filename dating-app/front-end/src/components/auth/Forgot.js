import React from 'react';
import './Auth.css';
import imgP from "./images/profile.jpg";
import { Link } from 'react-router-dom';

const Forgot = () => {
    return (
        <div className="bg">
            <div className="register-box">
                <img src={imgP} alt="img" className="avatar"/>
                <h1>FORGOT PASSWORD</h1>
                <form>
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email..."
                    />
                    <input
                        type="submit"
                        name="submit"
                        value="SUBMIT"
                    />
                    <Link className="a__links"  to="/login"><span>Already a member?</span></Link><br/>
                </form>
            </div>
        </div>
    )
}

export default Forgot;
