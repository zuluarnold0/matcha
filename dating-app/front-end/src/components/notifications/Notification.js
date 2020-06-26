import React from 'react';
import './Notification.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NotificationDetails from './NotificationDetails';

const findViewers = (my_views, users) => {
    let users_arr = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < my_views.length; j++) {
            if (my_views[j].viewer === users[i].email) {
                users_arr.push(users[i]);
            }
        }
    }
    return users_arr;
}

class Notification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            views: [],
            user: props.user,
            users: props.users
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/getviews')
        .then(response => response.json())
        .then(views => {
            if (views) {
                this.setState({ views: views });
            }
        })
        .catch(err => console.log('an error occured'));
    }

    render() {
        const { user, views, users } = this.state;
        if (!user) {
            return <Redirect to="/login" />
        } else {
            const my_views = views && views.filter(view_ => {
                return view_.viewed === user.email
            })
            let v_users = [];
            if (my_views.length > 0 && users.length > 0) {
                v_users = findViewers(my_views, users);
            }
            return (
                <div>
                    <Nav/>
                        <NotificationDetails v_users={v_users} views={views}/>
                    <Footer/>     
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user_reducer.user,
        users: state.users_redu_cer.users
    }
}

export default connect(mapStateToProps, null)(Notification);
