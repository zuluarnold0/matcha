import React from 'react';
import './DashBoard.css';
import Footer from '../footer/Footer';
import AppHeader from './AppHeader';
import AppSideBar from './AppSideBar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import DashContent from './DashContent';

class DashBoard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            users: []
        }
    }

    componentDidMount() {
        this.setState({ users: this.props.users });
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({ users: props.users });
    }

    render () {
        const { user, users } = this.state;
        if (!user) {
            return (
                <div>
                    <Redirect to="/login" />
                </div>
            )
        } else {
            return (
                <div>
                    <input type="checkbox" id="check" />
                    <AppHeader/>
                    <AppSideBar user={user}/>
                    <div className="content">
                        <DashContent users={users} user={user}/>
                        <Footer />
                    </div>
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

export default connect(mapStateToProps, null)(DashBoard);