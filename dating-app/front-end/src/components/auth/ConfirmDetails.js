import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmDetails = ({ firstname, lastname, username, email, bio, gender, age, sexPref, tags }) => {
    return (
            <div>
                <div className="bg">
                    <div className="register-box box__">
                        <h1>CONFIRM DETAILS</h1>
                        <form>
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
                            <span className="register-value"> {sexPref}</span><br/>
                            <span className="register-key">Age:</span>
                            <span className="register-value"> {age}</span><br/>
                            <span className="register-key">Bio:</span>
                            <span className="register-value"> {bio}</span><br/>
                            <span className="register-key">Tags:</span>
                            <span className="register-value">
                                 {tags}
                            </span><br/>
                            <button
                                className="back__btn"
                                type="submit"
                                name="submit"
                            >CONFIRM</button><br/><br/>
                            <Link className="a__links" to="/forgot"><span>Forgot Password?</span></Link><br/>
                            <Link className="a__links" to="/login"><span>Already a member?</span></Link><br/>
                           </form>
                    </div>
                </div>  
            </div>
    )
}

export default ConfirmDetails;
