import React, { Component } from 'react';
import UserMap from '../sharedComponents/map/UserMap';
import Bio from '../sharedComponents/bio/Bio';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import { PORT } from '../port/Port';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewed_user: props.viewed_user,
            user: props.user,
            show: false,
            showBlock: false
        }
    }
    
    closeModal = () => this.setState({ show: false });
    reportUser = () => this.setState({ show: true });

    closeBlockModal = () => this.setState({ showBlock: false });
    showBlockModal = () => this.setState({ showBlock: true });

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({
            viewed_user: props.viewed_user,
            user: props.user
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        const { viewed_user, user } = this.state;
        fetch(`${PORT}/like`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                liker: user.email,
                liked: viewed_user.email
            })
        })
    }

    handleUnlike = (event) => {
        event.preventDefault();
        const { user, viewed_user } = this.state;
        fetch(`${PORT}/unlike`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                unliker: user.email,
                unliked: viewed_user.email
            })
        })
    }

    render() {
        const { viewed_user, show, isBlocked, showBlock } = this.state;
        const { wasILiked, didILike } = this.props;
        if (!isBlocked) {
            if (viewed_user) {
                const status = viewed_user.is_logged_in === true ? "Online" : moment(viewed_user.logged_time).calendar();
                return (
                    <div className="user__profile" >
                        <span className="user__name">{ viewed_user.firstname[0].toUpperCase() + viewed_user.firstname.slice(1)} { viewed_user.lastname[0].toUpperCase() + viewed_user.lastname.slice(1) }</span><br/>
                        <img src={viewed_user.photourl}  alt="img"/>
                        <div className="user__btns">
                            {
                                viewed_user.photourl === "https://res.cloudinary.com/dsaj6ikxp/image/upload/v1595853508/p_avat_efz4hl.png" ?
                                <button type="button" className="btn btn-xs btn-success likebtn" disabled><span className="fas fa-thumbs-up"></span> LIKE</button>
                                :
                                <button type="button" className="btn btn-xs btn-success likebtn" onClick={this.handleClick}><span className="fas fa-thumbs-up"></span> LIKE</button>
                            }
                            <button type="button" className="btn btn-xs btn-primary" onClick={this.handleUnlike}><span className="fas fa-thumbs-down"></span> UNLIKE</button>
                            <button type="button" className="btn btn-xs btn-danger" onClick={this.showBlockModal}><span className="fas fa-ban"></span> BLOCK</button>
                            {
                                showBlock === true ? <div id="myModal" className="modal">
                                    <div className="modal-content">
                                        <span onClick={this.closeBlockModal} className="close">&times;</span>
                                        <p className="modalMessage">You attempted to block <strong>{ viewed_user.firstname[0].toUpperCase() + viewed_user.firstname.slice(1) }</strong>'s account. Matcha Team will block the user for you.</p>
                                    </div>
                                </div>
                                : ""
                            }
                            <button type="button" onClick={this.reportUser} className="btn btn-xs btn-warning "><span className="fas fa-bullhorn"></span> REPORT</button>
                            {
                                show === true ? <div id="myModal" className="modal">
                                    <div className="modal-content">
                                        <span onClick={this.closeModal} className="close">&times;</span>
                                        <p className="modalMessage">You reported <strong>{ viewed_user.firstname[0].toUpperCase() + viewed_user.firstname.slice(1) }</strong>'s account as a fake account. Further investigations will be done by Matcha Team</p>
                                    </div>
                                </div>
                                : ""
                            }
                        </div>
                        <div className="user__info">
                            <Bio 
                                user={viewed_user}
                                status={status}
                            />
                            <hr/>
                            <span className="you__liked">
                            {
                                didILike.length ?
                                `You liked ${viewed_user.username[0].toUpperCase() + viewed_user.username.slice(1)}'s profile` 
                                : ''
                            }
                            </span><br/><hr/>
                            <span className="liked__you">
                            { 
                                wasILiked.length ?
                                    `${viewed_user.username[0].toUpperCase() + viewed_user.username.slice(1)} liked you` 
                                : ''    
                            }
                            </span><br/><hr/>
                            <span className="you__matched">
                            { 
                                wasILiked.length > 0 && didILike.length > 0 ?
                                    `You Matched with ${viewed_user.username[0].toUpperCase() + viewed_user.username.slice(1)}` 
                                : ''
                            }
                            </span><br/><hr/>
                        </div>
                        <UserMap user={viewed_user}/>
                    </div>
                );
            } else {
                return <h1>LOADING....</h1>
            }
        } else {
            return <Redirect to='/'/>
        }
    }
}

export default UserProfile;
