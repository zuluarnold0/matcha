import React from 'react';
import img_ from '../imgs/4.jpeg';
import UserMap from '../map/UserMap';
import Bio from '../bio/Bio';

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
                <Bio />
                <span className="you__liked">
                   {"You liked Arnold's profile" }
                </span><br/><hr/>
                <span className="liked__you">
                    {"Star liked you" }
                </span><br/><hr/>
                <span className="you__matched">
                    {"You Matched with Skott" }
                </span><br/><hr/>
            </div>
            <UserMap />
        </div>
    )
}

export default UserProfile;
