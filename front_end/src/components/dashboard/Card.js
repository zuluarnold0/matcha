import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { PORT } from '../port/Port';

class Card extends Component {
    
    state = {
        viewer:this.props.myprofile.email,
        viewed: this.props.user.email,
        user: this.props.user
    }

    handleView = () => {
        const { viewer, viewed } = this.state;
        if (viewer && viewed) {
            fetch(`${PORT}/view`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    viewer: viewer,
                    viewed: viewed
                })
            })
            .catch(err => console.log(err));
        }
    }

    render() {
        const { user } = this.state;
        return (
            <div className="float-left">
                <div className="card__">
                    <Link to={`/user/${user.id}`} onClick={this.handleView}>
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
}

export default Card;
