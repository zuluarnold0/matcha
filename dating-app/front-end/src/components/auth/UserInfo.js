import React, { Component } from 'react';
import imgP from "./images/profile.jpg";
import Tag from '../update/Tag';

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
        const { containerStyle, inputStyle, onDeleteTag, onKeyUp, invalid_input, tags } = this.props;
        var tags_ = tags && tags.map((tag, i) => {
            return <Tag onDeleteTag={onDeleteTag} key={i} tag={tag}/>
        });
        return (
            <div>
                <div className="bg">
                    <div className="register-box">
                        <img src={imgP} alt="img" className="avatar"/>
                        <h1>USER INFO</h1>
                        <form>
                            <h2 className="form_title">Enter any from the following TAGS</h2>
                            <h2 className="form_tags"> |art| |photography| |coding| |gym| |music| </h2>
                            <div className="wrong_input">{ invalid_input }</div>
                            <div style={containerStyle}>
                                { tags_ }
                                <input className="form-control" style={inputStyle} onKeyUp={ (e) => onKeyUp(e) } type="text" placeholder="Type tag name and press SPACE..." />
                                <br/>
                            </div>
                            <div>
                                <h2 className="form_title">Biography</h2>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    name="bio"
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
                            >GO BACK</button><br/><br/>
                        </form>
                    </div>
                </div>  
            </div>
        )
    }
}

export default UserInfo;
