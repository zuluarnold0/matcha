import React, { Component } from 'react';
import UserMap from '../map/UserMap';
import Bio from '../bio/Bio';

class UserProfile extends Component {

    render() {
        const { show, reportUser, closeModal, viewed_user } = this.props;
        return (
            <div className="user__profile" >
                <span className="user__name">{ viewed_user.firstname[0].toUpperCase() + viewed_user.firstname.slice(1)} { viewed_user.lastname[0].toUpperCase() + viewed_user.lastname.slice(1) }</span><br/>
                <img src={viewed_user.photourl}  alt="img"/>
                <div className="user__btns">
                    <button type="button" className="btn btn-xs btn-success likebtn"><span className="fas fa-thumbs-up"></span> LIKE</button>
                    <button type="button" className="btn btn-xs btn-primary"><span className="fas fa-thumbs-down"></span> UNLIKE</button>
                    <button type="button" className="btn btn-xs btn-danger"><span className="fas fa-ban"></span> BLOCK</button>
                    <button type="button" onClick={reportUser} className="btn btn-xs btn-warning "><span className="fas fa-bullhorn"></span> REPORT</button>
                    {
                        show === true ? <div id="myModal" className="modal">
                            <div className="modal-content">
                                <span onClick={closeModal} className="close">&times;</span>
                                <p className="modalMessage">You reported <strong>{ viewed_user.username[0].toUpperCase() + viewed_user.username.slice(1) }</strong>'s account as a fake account. Further investigations will be done by Matcha Team</p>
                            </div>
                        </div>
                        : ""
                    }
                </div>
                <div className="user__info">
                    <Bio user={viewed_user}/>
                    <span className="you__liked">
                    {`You liked ${viewed_user.username[0].toUpperCase() + viewed_user.username.slice(1)}'s profile` }
                    </span><br/><hr/>
                    <span className="liked__you">
                        {`${viewed_user.username[0].toUpperCase() + viewed_user.username.slice(1)} liked you` }
                    </span><br/><hr/>
                    <span className="you__matched">
                        {`You Matched with ${viewed_user.username[0].toUpperCase() + viewed_user.username.slice(1)}` }
                    </span><br/><hr/>
                </div>
                <UserMap user={viewed_user}/>
            </div>
        );
    }
}

export default UserProfile;
