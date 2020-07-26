import React from 'react';
import './Bio.css';

const Bio = ({ user }) => {
    return (
        <div>
            <span className="info__key"><span className="fas fa-user"></span> </span><span className="info__value"> { user.username } </span><br/>
            <span className="info__key"><span className="fas fa-venus-mars"></span> </span><span className="info__value"> { user.gender } </span><br/>
            <span className="info__key"><span className="fas fa-history"></span> </span><span className="info__value"> { user.age } years</span><br/>
            <span className="info__key"><span className="fas fa-heart"></span> </span><span className="info__value">{ user.sexpref }</span><br/>
            <span className="info__key"><span className="fas fa-star"></span> </span><span className="info__value">{ user.popularity }</span><br/>
            <span className="info__key"><span className="fas fa-map-marker-alt"></span> </span><span className="info__value">{ user.city }</span><br/>
            <span className="info__key"><span className="fas fa-signal"></span> </span><span className="status__value">Online</span><br/>
            <hr/>
            <span className="info__key"></span><span className="user__bio">{ user.bio }</span><br/>
            <hr/>
            <span className="info__key"><span className="fas fa-tags"></span></span>{" "}
            {
                user.tags && user.tags.map(tag => {
                    return <span className="user__tag" key={tag}> { tag } </span>;
                })
            }
            <hr/>
            <div className="profile__imgs">
                <img src={ user.img1 } alt="img"/>
                <img src={ user.img2 } alt="img"/>
                <img src={ user.img3 } alt="img"/>
                <img src={ user.img4 } alt="img"/>
            </div>
            <hr/>
        </div>
    )
}

export default Bio;
