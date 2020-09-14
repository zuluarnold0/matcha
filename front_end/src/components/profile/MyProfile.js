import React, { Component } from 'react';
import ProfileCover from './ProfileCover';
import UpdateLinks from './UpdateLinks';
import ProfileContent from './ProfileContent';
import UserMap from '../sharedComponents/map/UserMap';
import './Profile.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class MyProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    componentDidMount() {
        this.usersAdder = setInterval(() => {
            this.setState({ user: this.props.user });
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.usersAdder);
    }

    render () {
        const { user } = this.state;
        if (!user) {
            return <Redirect to="/login" />
        } else {
            return (
                <div>
                    <Nav/>
                    <ProfileCover user={user}/>
                    <UpdateLinks user={user}/>
                    <ProfileContent user={user}/>
                    <UserMap user={user}/>
                    <Footer/> 
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
  
export default connect(mapStateToProps, null) (MyProfile);
