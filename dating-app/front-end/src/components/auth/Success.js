import React from 'react';
import { Link } from 'react-router-dom';
import imgP from "./images/profile.jpg";

const Success = ({ error_msg, tryAgain }) => {
    return (
        <div>
            <div className="bg">
                <div className="register-box box__">
                    <img src={imgP} alt="img" className="avatar"/>
                    <h1>FORM SUBMISSION STATUS</h1>
                    <br/>
                    {
                        error_msg === "success" ? 
                        (
                            <Link className="success__links" to="/verify">
                                <strong> verify account</strong>
                            </Link>
                        )
                          :
                        (
                            <p className="success__links showClick" onClick={tryAgain}>
                                <strong>please try again</strong>
                            </p>
                        )
                    }
                </div>
            </div>  
        </div>
    )
}

export default Success;
