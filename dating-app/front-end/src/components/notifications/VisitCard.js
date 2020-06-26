import React from 'react';

const VisitCard = ({ view }) => {
    return (
        <div className="history__container">
            <div className="history__img">
                <img src={view.photourl} alt="img"/>
            </div>
            <div className="history__content">
                <span className="history__name">{ view.firstname[0].toUpperCase() + view.firstname.slice(1)} { view.lastname[0].toUpperCase() + view.lastname.slice(1) }</span>
                <span className="history__msg"> Visited your profile</span>
                <br/>
            </div>
        </div>
    )
}

export default VisitCard;