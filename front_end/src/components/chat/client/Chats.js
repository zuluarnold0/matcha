import React from 'react';
import './Chats.css';
import FindMatch from './FindMatch';
import { connect } from 'react-redux';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';
import ScrollBar from '../../scrollbar/ScrollBar';
import { PORT } from '../../port/Port';

class Chats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            matches: [],
            user: props.user,
            users: []
        }
    }

    componentDidMount() {
        this.usersMatches = setInterval(() => {
            //getting matches from database
            fetch(`${PORT}/getmatches`)
            .then(response => response.json())
            .then(matches => {
                if (matches) {
                    this.setState({ matches: matches });
                }
            })
            .catch(err => console.log('an error occured'));

            //fetching users from database
            fetch(`${PORT}/`)
            .then(response => response.json())
            .then(users_ => {
                if (users_) {
                    this.setState({ users: users_ });
                }
            })
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.usersMatches);
    }

    render() {
        const { matches, user, users } = this.state;
        return (
            <div>
                <Nav/>
                    <div className="matches__container">
                        <span className="matches__title">{ "Chats" } </span><hr/><br/>
                            <ScrollBar>
                                {
                                    !users.length ?
                                        <div id="dot-loader">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    :
                                    <FindMatch
                                        matches={matches}
                                        user={user}
                                        users={users}
                                    />
                                }
                            </ScrollBar>
                    </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.user_reducer.user
    }
}

export default connect(mapStateToProps, null) (Chats);
