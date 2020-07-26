import React from 'react';
import { Link } from 'react-router-dom';
import { PORT } from '../port/Port';

class Match extends React.Component {
    handleView = () => {
        fetch(`${PORT}/view`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewer: this.props.user.email,
                viewed: this.props.match.email
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        const { match } = this.props;
        return (
            <div>
                <Link to={`/user/${match.id}`} onClick={this.handleView}>
                    <div className="history__container">
                        <div className="history__img">
                            <img src={match.photourl} alt="img"/>
                        </div>
                        <div className="history__content">
                            <span className="history__msg">You matched with </span>
                            <span className="history__name">{ match.firstname[0].toUpperCase() + match.firstname.slice(1)} { match.lastname[0].toUpperCase() + match.lastname.slice(1) }</span>
                            <br/>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Match;
