import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
//import img_ from '../imgs/4.jpeg';

const Card = ({ user }) => {
    return (
        <div className="float-left">
            <div className="card__">
                <Link to={`/user/${user.id}`}>
                    <div className="card__image">
                        <img src={user.photourl} alt="img"/>
                    </div>
                    <div className="card__text">
                        <span className="card__name">{ user.firstname[0].toUpperCase() + user.firstname.slice(1)} { user.lastname[0].toUpperCase() + user.lastname.slice(1) }, </span>
                        <span className="card__info">{ user.age }</span>
                        <p className="card__info">{ user.gender }</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Card;
