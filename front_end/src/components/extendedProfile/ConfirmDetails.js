import React from 'react';
import imgP from "../auth/images/profile.jpg";

//confirm your details
const ConfirmDetails = ({ prevStep, onFormSubmit, bio, gender, age, sexpref, tags, tryAgain, error_msg }) => {
    return (
        <div className="bg">
            <div className="register-box box__">
                <img src={imgP} alt="img" className="avatar"/>
                <h1>CONFIRM DETAILS</h1>
                <div>
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
                    <br/>
                    {
                        error_msg === "failed to update profile" ?
                            <p className="success__links showClick" onClick={tryAgain}>
                                please here to try again
                            </p>
                            :
                            "success"
                    }
                </div>
            </div>
        </div>  
    )
}

export default ConfirmDetails;
