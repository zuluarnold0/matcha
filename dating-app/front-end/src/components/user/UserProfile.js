import React from 'react';
import UserMap from './UserMap';
import img_ from '../imgs/1.jpeg';

const UserProfile = () => {
    return (
        <div className="user__profile" >
            <span className="user__name">Star Arnold</span><br/>
            <img src={img_}  alt="img"/>
            <div className="user__btns">
                <button type="button" className="btn__xs btn__success likebtn"><span className="fas fa-house-user"></span> LIKE</button>
                <button type="button" className="btn__xs btn__primary"><span className="fas fa-house-user"></span> UNLIKE</button>
                <button type="button" className="btn__xs btn__danger"><span className="fas fa-house-user"></span> BLOCK</button>
                <button type="button" className="btn__xs btn__warning "><span className="fas fa-house-user"></span> REPORT</button>
            </div>
            <div className="user__info">
                <span className="info__key"><span className="fas fa-house-user"></span> </span><span className="info__value"> male </span><br/>
                <span className="info__key"><span className="fas fa-house-user"></span> </span><span className="info__value">25 years</span><br/>
                <span className="info__key"><span className="fas fa-house-user"></span> </span><span className="info__value">female</span><br/>
                <span className="info__key"><span className="fas fa-house-user"></span> </span><span className="info__value">1000</span><br/>
                <span className="info__key"><span className="fas fa-house-user"></span> </span><span className="info__value">london</span><br/>
                <span className="info__key"><span className="fas fa-house-user"></span> </span><span className="status__value">Online</span><br/>
                <hr/>
                <span className="info__key"></span><span className="user__bio">{"I love food!!"}</span><br/>
                <hr/>
                <span className="info__key"><span className="fas fa-house-user"></span></span>{" "}
                <span className="user__tag"> code </span>
                <span className="user__tag"> gym </span>
                <span className="user__tag"> date </span>
                <span className="user__tag"> love </span>
                <hr/>
                <span className="you__liked">
                   {"You liked Arnold's profile" }
                </span><br/><hr/>
                <span className="liked__you">
                    {"Star liked you" }
                </span><br/><hr/>
                <span className="you__matched">
                    {"You Matched with Skott" }
                </span><br/>
            </div>
            <UserMap />
        </div>
    )
}

export default UserProfile;
