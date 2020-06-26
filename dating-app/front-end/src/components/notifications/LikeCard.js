import React from 'react';
import img_ from '../imgs/4.jpeg';

const LikeCard = () => {
    return (
        <div className="history__container">
            <div className="history__img">
                <img src={img_} alt="img"/>
            </div>
            <div className="history__content">
                <span className="history__name">Skott Anola </span>
                <span className="history__msg">Liked your profile</span>
                <br/>
            </div>
        </div>
    )
}

export default LikeCard;
