import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

class Card extends Component {
    
    state = {
        viewer: null,
        viewed: null
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({ 
            viewer: this.props.myprofile.email,
            viewed: this.props.user.email
        });
    }

    handleView = () => {
        fetch('http://localhost:3000/view', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewer: this.props.myprofile.email,
                viewed: this.props.user.email
            })
        })
        .catch(err => console.log(err))
    }

    componentWillUnmount() {
        this.setState({ 
            viewer: null,
            viewed: null
        })
    }

    render() {
        const { user } = this.props;
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
