import React from 'react';
import img_ from '../imgs/4.jpeg';
import { Link } from 'react-router-dom';

const Match = () => {
    return (
        <div>
            <Link style={{ textDecoration: 'none' }} to={'/viewuser/'+ 1}>
                <div className="history__container">
                    <div className="history__img">
                        <img src={img_} alt="img"/>
                    </div>
                    <div className="history__content">
                        <span className="history__msg">You matched with </span>
                        <span className="history__name"> Pro Sniper </span>
                        <br/>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Match;
