import React from 'react';
import { Link } from 'react-router-dom';
import imgP from "./images/profile.jpg";

const Success = () => {
    return (
        <div>
            <div className="bg">
                <div className="register-box box__">
                    <img src={imgP} alt="img" className="avatar"/>
                    <h1>FORM SUBMITTED SUCCESSFULLY</h1>
                    <p className="success__msg">An emaill was sent. Please verify your Email</p>
                    <br/>
                    <Link className="success__links" to="/login"><span>Go to Login</span></Link><br/>
                </div>
            </div>  
        </div>
    )
}

export default Success;
