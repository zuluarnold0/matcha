import React from 'react';
import img_ from '../imgs/4.jpeg';
import UserMap from '../map/UserMap';
import Bio from '../bio/Bio';

const UserProfile = ({ show, reportUser, closeModal }) => {
    return (
        <div className="user__profile" >
            <span className="user__name">Star Arnold</span><br/>
            <img src={img_}  alt="img"/>
            <div className="user__btns">
                <button type="button" className="btn btn-xs btn-success likebtn"><span className="fas fa-thumbs-up"></span> LIKE</button>
                <button type="button" className="btn btn-xs btn-primary"><span className="fas fa-thumbs-down"></span> UNLIKE</button>
                <button type="button" className="btn btn-xs btn-danger"><span className="fas fa-ban"></span> BLOCK</button>
                <button type="button" onClick={reportUser} className="btn btn-xs btn-warning "><span className="fas fa-bullhorn"></span> REPORT</button>
                {
                    show === true ? <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span onClick={closeModal} className="close">&times;</span>
                            <p className="modalMessage">You reported <strong>{ "Star Arnold" }</strong>'s account as a fake account. Further investigations will be done by Matcha Team</p>
                        </div>
                    </div>
                    : ""
                }
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
