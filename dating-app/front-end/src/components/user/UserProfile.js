import React, { Component } from 'react';
import UserMap from '../map/UserMap';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popularity: ''
        }
    }

    componentDidMount() {
        this.setState({ popularity: this.props.viewed_user.popularity })

    }

    handleClick = () => {
        fetch('http://localhost:3000/like', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                liker: this.props.user.email,
                liked: this.props.viewed_user.email
            })
        })
        .then(response => response.json())
        .then(popularity => {
            if (popularity) {
                this.setState({ popularity: popularity})
            }
        })
    }

    handleUnlike = () => {
        fetch('http://localhost:3000/unlike', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                unliker: this.props.user.email,
                unliked: this.props.viewed_user.email
            })
        })
    }

    render() {
        const { wasILiked, didILike, show, reportUser, closeModal, viewed_user, showBlock, showBlockModal, closeBlockModal } = this.props;
        const status = viewed_user.logged_time === true ? "Online" : viewed_user.logged_time;
        return (
            <div className="user__profile" >
                <span className="user__name">{ viewed_user.firstname[0].toUpperCase() + viewed_user.firstname.slice(1)} { viewed_user.lastname[0].toUpperCase() + viewed_user.lastname.slice(1) }</span><br/>
                <img src={viewed_user.photourl}  alt="img"/>
                <div className="user__btns">
                    <button type="button" className="btn btn-xs btn-success likebtn" onClick={this.handleClick}><span className="fas fa-thumbs-up"></span> LIKE</button>
                    <button type="button" className="btn btn-xs btn-primary" onClick={this.handleUnlike}><span className="fas fa-thumbs-down"></span> UNLIKE</button>
                    <button type="button" className="btn btn-xs btn-danger" onClick={showBlockModal}><span className="fas fa-ban"></span> BLOCK</button>
                    {
                        showBlock === true ? <div id="myModal" className="modal">
                            <div className="modal-content">
                                <span onClick={closeBlockModal} className="close">&times;</span>
                                <p className="modalMessage">You attempted to block <strong>{ viewed_user.username[0].toUpperCase() + viewed_user.username.slice(1) }</strong>'s account. Matcha Team will block the user for you.</p>
                            </div>
                        </div>
                        : ""
                    }
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
                <span className="info__key"><span className="fas fa-user"></span> </span><span className="info__value"> { viewed_user.username } </span><br/>
                    <span className="info__key"><span className="fas fa-venus-mars"></span> </span><span className="info__value"> { viewed_user.gender } </span><br/>
                    <span className="info__key"><span className="fas fa-history"></span> </span><span className="info__value"> { viewed_user.age } years</span><br/>
                    <span className="info__key"><span className="fas fa-heart"></span> </span><span className="info__value">{ viewed_user.sexpref }</span><br/>
                    <span className="info__key"><span className="fas fa-star"></span> </span><span className="info__value">{ this.state.popularity }</span><br/>
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
    }
}

export default UserProfile;
