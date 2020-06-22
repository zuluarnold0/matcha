import React from 'react';
import './DashBoard.css';
import FilterBar from './FilterBar';
import UsersDisplay from './UsersDisplay';
import Footer from '../footer/Footer';
import AppHeader from './AppHeader';
import AppSideBar from './AppSideBar';
//import { Redirect } from 'react-router-dom';

class DashBoard extends React.Component {
    state = {
        user: this.props.user
    }

    render () {
        const { user } = this.state;
        
            return (
                <div>
                    <input type="checkbox" id="check" />
                    <AppHeader/>
                    <AppSideBar user={user}/>
                    <div className="content">
                        <FilterBar />
                        <UsersDisplay  />
                        <Footer />
                    </div>
                </div>
            )
       
    }
}

export default DashBoard;
