import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import img_ from '../imgs/1.jpeg';

const Card = () => {
    return (
        <div className="float-left">
            <div className="card__">
                <Link  to={'/viewuser/'+1}>
                    <div className="container2"> {/*cannot find*/}
                        <div className="card_banner">
                            <img src={img_} alt="img"/>
                        </div>
                    </div>
                    <div className="card__text">
                        <div className="box_1"> {/*cannot find*/}
                            <span className="card__name">Star Arnold, </span>
                            <span className="card__info">37</span>
                            <p className="card__info">male</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Card;
