import React from 'react';
import './DashBoard.css';
import Footer from '../footer/Footer';
import AppHeader from './AppHeader';
import AppSideBar from './AppSideBar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import DashContent from './DashContent';

const findBloks = (my_blocks, users) => {
    let users_arr = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < my_blocks.length; j++) {
            if (my_blocks[j].liker === users[i].email) {
                users_arr.push(users[i]);
            }
        }
    }
    return users_arr;
}

class DashBoard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            users: [],
            blocks: []
        }
    }

    componentDidMount() {
        //make fetch request to database to get users
        //this.usersAdder = setInterval(() => {

            fetch('http://localhost:3000/getblocks')
            .then(response => response.json())
            .then(blocks_ => {
                if (blocks_) {
                    this.setState({ blocks: blocks_ });
                }
            })
            .catch(err => console.log('an error occured'));

            fetch('http://localhost:3000/')
            .then(response => response.json())
            .then(users_ => {
                if (users_) {
                    this.setState({ users: users_ });
                }
            })
            .catch(err => console.log('an error occured'));
       // }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.usersAdder);
    }

    render () {
        const { user, users, blocks } = this.state;
        if (!user) {
            return <Redirect to="/login" />;
        } else {
            const my_blocks = blocks && blocks.filter(blocks_ => {
                return (blocks_.blocker !== user.email) || (blocks_.blocked !== user.email);
            })
            console.log(my_blocks);
            const b_users = (my_blocks.length > 0 && users.length > 0) ? findBloks(my_blocks, users) : users;
            return (
                <div>
                    <input type="checkbox" id="check" />
                    <AppHeader/>
                    <AppSideBar user={user}/>
                    <div className="content">
                        <DashContent users={b_users} user={user}/>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user_reducer.user
    }
}

export default connect(mapStateToProps, null)(DashBoard);