import React, { Component } from 'react';
import CheckBox from "./CheckBox";
import AppHeader from "./AppHeader";
import AppSideBar from "./AppSideBar";
import AppContent from "./AppContent";
import { connect } from 'react-redux';
import { searchChangeAction, fetchUsersAction } from '../store/actions/actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchReducer.searchField,
        users: state.userReducer.users,
        isLoading: state.userReducer.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchChangeAction: (text) => dispatch(searchChangeAction(text)),
        fetchUsersAction: () => dispatch(fetchUsersAction())
    }
}

class Dashboard extends Component {

    handleInputChange = (event) => {
        this.props.searchChangeAction(event.target.value);
    }

    componentDidMount() {
        this.props.fetchUsersAction();
    }

    render() {
        return this.props.isLoading ? ("Please Wait While We Fetch Users....") : (
            <div>
                <CheckBox />
                <AppHeader />
                <AppSideBar />
                <AppContent
                    users={this.props.users}
                    searchField={this.props.searchField}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);