import React, { Component } from 'react';
import UserMap from '../map/UserMap';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

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
        fetch('http://localhost:3000/like', {
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
        fetch('http://localhost:3000/unlike', {
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
                                viewed_user.photourl === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2hIJK-htqNGFQUUtshHh934Z_J3CDlSe9H7UHLWln9by7CoS" ?
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
                        <span className="info__key"><span className="fas fa-user"></span> </span><span className="info__value"> { viewed_user.username } </span><br/>
                            <span className="info__key"><span className="fas fa-venus-mars"></span> </span><span className="info__value"> { viewed_user.gender } </span><br/>
                            <span className="info__key"><span className="fas fa-history"></span> </span><span className="info__value"> { viewed_user.age } years</span><br/>
                            <span className="info__key"><span className="fas fa-heart"></span> </span><span className="info__value">{ viewed_user.sexpref }</span><br/>
                            <span className="info__key"><span className="fas fa-star"></span> </span><span className="info__value">{ viewed_user.popularity }</span><br/>
                            <span className="info__key"><span className="fas fa-map-marker-alt"></span> </span><span className="info__value">{ viewed_user.city }</span><br/>
                            <span className="info__key"><span className="fas fa-signal"></span> </span><span className="status__value">{ status }</span><br/>
                            <hr/>
                            <span className="info__key"></span><span className="user__bio">{ viewed_user.bio }</span><br/>
                            <hr/>
                            <span className="info__key"><span className="fas fa-tags"></span></span>{" "}
                            {
                                viewed_user.tags && viewed_user.tags.map(tag => {
                                    return <span className="user__tag" key={tag}> { tag } </span>;
                                })
                            }
                            <hr/>
                            <div className="profile__imgs">
                                <img src={ viewed_user.img1 } alt="img"/>
                                <img src={ viewed_user.img2 } alt="img"/>
                                <img src={ viewed_user.img3 } alt="img"/>
                                <img src={ viewed_user.img4 } alt="img"/>
                            </div>
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
