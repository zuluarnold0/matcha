import React, { Component } from 'react';
import AppHeader from "./AppHeader";
import AppSideBar from "./AppSideBar";
import AppContent from "./AppContent";
import { users } from './Profile';

class Dashboard extends Component {
    state = {
        users: users,
        searchField: ""
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }

    render() {
        const { users, searchField } = this.state;
        
        return users.length < 0 ? ("FETCHING DATA!!!!") : (
            <div>
                <input type="checkbox" id="check" />
                <AppHeader />
                <AppSideBar />
                <AppContent
                    users={users}
                    searchField={searchField}
                    handleInputChange={this.handleInputChange}
                />
            </div>
            );
    }
}

export default Dashboard;