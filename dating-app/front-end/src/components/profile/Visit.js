import React from 'react';
import { Link } from 'react-router-dom';

class Visit extends React.Component {
    handleView = () => {
        fetch('http://localhost:3000/view', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewer: this.props.user.email,
                viewed: this.props.view.email
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        const { view } = this.props;
        return (
            <div>
                <Link to={`/user/${view.id}`} onClick={this.handleView}>
                    <div className="history__container">
                        <div className="history__img">
                            <img src={view.photourl} alt="img"/>
                        </div>
                        <div className="history__content">
                            <span className="history__msg">You visited </span>
                            <span className="history__name">{ view.firstname[0].toUpperCase() + view.firstname.slice(1)} { view.lastname[0].toUpperCase() + view.lastname.slice(1) }</span>
                            <span className="history__msg">'s profile</span>
                            <br/>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Visit;