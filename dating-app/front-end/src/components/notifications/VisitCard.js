import React from 'react';
import img_ from '../imgs/4.jpeg';
import { Link } from 'react-router-dom';

const VisitCard = () => {
    return (
        <div>
            <Link style={{ textDecoration: 'none' }} to={'/user/'+ 1}>
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
            </Link>
        </div>
    )
}

export default VisitCard;