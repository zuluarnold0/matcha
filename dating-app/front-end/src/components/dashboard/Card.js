import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import img_ from '../imgs/4.jpeg';

const Card = () => {
    return (
        <div className="float-left">
            <div className="card__">
                <Link  to={'/user/'+1}>
                    <div className="card__image">
                        <img src={img_} alt="img"/>
                    </div>
                    <div className="card__text">
                        <span className="card__name">Star Arnold, </span>
                        <span className="card__info">37</span>
                        <p className="card__info">male</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Card;
