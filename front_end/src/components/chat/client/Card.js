import React from 'react';
import { Link } from 'react-router-dom'; 

const Card = ({ match }) => {
    return <div>
        <Link style={{ textDecoration: 'none' }} to={`/chat/${match.id}`}>
            <div className="match_card_container">
                <div className="match_card_img">
                    <img src={match.photourl} alt="img"/>
                </div>
                <div className="match_card_content">
                    <span className="match_card_name" > { match.firstname[0].toUpperCase() + match.firstname.slice(1) }</span><br/>
                </div>
            </div>
        </Link>
    </div>
}

export default Card;
