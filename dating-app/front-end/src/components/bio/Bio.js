import React from 'react';
import './Bio.css';

const Bio = () => {
    return (
        <div>
            <span className="info__key"><span className="fas fa-user"></span> </span><span className="info__value">star </span><br/>
            <span className="info__key"><span className="fas fa-venus-mars"></span> </span><span className="info__value">male </span><br/>
            <span className="info__key"><span className="fas fa-history"></span> </span><span className="info__value">25 years</span><br/>
            <span className="info__key"><span className="fas fa-heart"></span> </span><span className="info__value">female</span><br/>
            <span className="info__key"><span className="fas fa-star"></span> </span><span className="info__value">1000</span><br/>
            <span className="info__key"><span className="fas fa-map-marker-alt"></span> </span><span className="info__value">london</span><br/>
            <span className="info__key"><span className="fas fa-signal"></span> </span><span className="status__value">Online</span><br/>
            <hr/>
            <span className="info__key"></span><span className="user__bio">{"I love food!!"}</span><br/>
            <hr/>
            <span className="info__key"><span className="fas fa-tags"></span></span>{" "}
            <span className="user__tag"> code </span>
            <span className="user__tag"> gym </span>
            <span className="user__tag"> date </span>
            <span className="user__tag"> love </span>
            <hr/>
        </div>
    )
}

export default Bio;
