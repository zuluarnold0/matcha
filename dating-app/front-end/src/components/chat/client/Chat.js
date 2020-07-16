import React from 'react';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ChatSummary from './ChatSummary';

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user: props.user
        }
    }

    componentDidMount() {
        this.users_Adder = setInterval(() => {
            fetch('http://localhost:3000/')
            .then(response => response.json())
            .then(users_ => {
                if (users_) {
                    this.setState({ users: users_ });
                }
            })
            .catch(err => console.log('an error occured'));
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.users_Adder);
    }

    render() {
        const { users, user } = this.state;
        if (user) {
            const {_id } = this.props;
            const receiver = users && users.filter(_user => _user.id === Number(_id));
            return (
                <div className="chat_main_container">
                    <Nav/>
                    {
                        users.length ?
                            <ChatSummary user={user} receiver={receiver}/>
                            :
                            "LOADING....."
                    }
                    <Footer/>
                </div>
            )
        } else {
            return <Redirect to="/"/>;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        _id: ownProps.match.params.id,
        user: state.user_reducer.user
    }
}

export default connect(mapStateToProps, null)(Chat);