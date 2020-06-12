import React, { Component } from 'react';
import imgP from "./images/profile.jpg";
import Tag from '../update/Tag';
import { Link } from 'react-router-dom';

class UserInfo extends Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }
    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { containerStyle, inputStyle, onDeleteTag, onKeyUp, invalid_input, tags, bio, handleChange } = this.props;
        var tags_ = tags && tags.map((tag, i) => {
            return <Tag onDeleteTag={onDeleteTag} key={i} tag={tag}/>
        });
        return (
            <div>
                <div className="bg">
                    <div className="register-box box__">
                        <img src={imgP} alt="img" className="avatar"/>
                        <h1>USER INFO</h1>
                        <form>
                            <h3 className="form_title">Enter any from the following TAGS</h3>
                            <h3 className="form_tags"> 
                                <span className="tags_color1"> art </span>
                                <span className="tags_color2"> photography </span>
                                <span className="tags_color3"> coding </span>
                                <span className="tags_color4"> gym </span>
                                <span className="tags_color5"> music </span>
                            </h3>
                            <div className="wrong_input">{ invalid_input }</div>
                            <div style={containerStyle}>
                                { tags_ }
                                <input className="form-control" style={inputStyle} onKeyUp={ (e) => onKeyUp(e) } type="text" placeholder="Type tag name and press SPACE..." />
                            </div>
                            <br/>
                            <div>
                                <h3 className="form_title">Biography</h3>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    name="bio"
                                    value={bio}
                                    onChange={handleChange}
                                    placeholder="Write about yourself..."
                                />
                            </div><br/>
                            <button
                                className="continue__btn"
                                type="submit"
                                name="submit"
                                onClick={this.continue}
                            >CONTINUE</button>
                            <button
                                className="back__btn"
                                type="submit"
                                name="submit"
                                onClick={this.back}
                            >GO BACK</button>
                            <br/><br/>
                            <Link className="success__links" to="/login"><span>Go to Login</span></Link><br/>
                        </form>
                    </div>
                </div>  
            </div>
        )
    }
}

export default UserInfo;
