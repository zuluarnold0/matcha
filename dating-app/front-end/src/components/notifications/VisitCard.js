import React from 'react';
import img_ from '../imgs/4.jpeg';

const VisitCard = () => {
    return (
        <div className="history__container">
            <div className="history__img">
                <img src={img_} alt="img"/>
            </div>
            <div className="history__content">
                <span className="history__name">Star Arnold </span>
                <span className="history__msg">Visited your profile</span>
                <br/>
            </div>
        </div>
    )
}

export default VisitCard;