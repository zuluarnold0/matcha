import React from 'react';
import './Chats.css';
import FindMatch from './FindMatch';
import { connect } from 'react-redux';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';
import ScrollBar from '../../scrollbar/ScrollBar';

class Chats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            matches: [],
            user: props.user,
            users: props.users
        }
    }

    componentDidMount() {
        //getting matches from database
        fetch('http://localhost:3000/getmatches')
        .then(response => response.json())
        .then(matches => {
            if (matches) {
                this.setState({ matches: matches });
            }
        })
        .catch(err => console.log('an error occured'));
    }

    componentWillUnmount() {
        this.setState({ 
            matches: [],
            user: null,
            users: []
        });
    }

    render() {
        const { matches, user, users } = this.state;
        return (
            <div>
                <Nav/>
                    <div className="matches__container">
                        <span className="matches__title">{ "Chats" } </span><hr/><br/>
                            <ScrollBar>
                                <FindMatch
                                    matches={matches}
                                    user={user}
                                    users={users}
                                />
                            </ScrollBar>
                    </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.user_reducer.user,
      users: state.users_redu_cer.users
    }
}

export default connect(mapStateToProps, null) (Chats);
