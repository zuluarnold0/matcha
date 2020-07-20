import React from 'react';
import imgP from "./images/profile.jpg";
import { Link } from 'react-router-dom';

const ConfirmDetails = ({ prevStep, onFormSubmit, firstname, lastname, username, email, bio, gender, age, sexpref, tags }) => {
    return (
        <div className="bg">
            <div className="register-box box__">
                <img src={imgP} alt="img" className="avatar"/>
                <h1>CONFIRM DETAILS</h1>
                <div>
                    <span className="register-key">FirstName:</span>
                    <span className="register-value"> {firstname}</span><br/>
                    <span className="register-key">LastName:</span>
                    <span className="register-value"> {lastname}</span><br/>
                    <span className="register-key">Username:</span>
                    <span className="register-value"> {username}</span><br/>
                    <span className="register-key">Email:</span>
                    <span className="register-value"> {email}</span><br/>
                    <span className="register-key">Gender:</span>
                    <span className="register-value"> {gender}</span><br/>
                    <span className="register-key">Preference:</span>
                    <span className="register-value"> {sexpref}</span><br/>
                    <span className="register-key">Age:</span>
                    <span className="register-value"> {age}</span><br/>
                    <span className="register-key">Bio:</span>
                    <span className="register-value"> {bio}</span><br/>
                    <span className="register-key">Tags: </span>
                    <span className="register-value">
                    {
                        tags && tags.map(tag => {
                            return <span className="confirm__tag" key={tag}> {tag} </span>;
                        })
                    }
                    </span><br/><br/>
                    <button
                        className="continue__btn"
                        type="submit"
                        name="submit"
                        onClick={onFormSubmit}
                    >CONFIRM</button>
                    <button
                        className="back__btn"
                        type="submit"
                        name="submit"
                        onClick={prevStep}
                    >GO BACK</button>
                    <br/><br/>
                    <Link className="success__links" to="/login">
                        <span>Go to Login</span>
                    </Link><br/>
                </div>
            </div>
        </div>  
    )
}

export default ConfirmDetails;
