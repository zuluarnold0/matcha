import React from 'react';
import './DashBoard.css';
import FilterBar from './FilterBar';
import UsersDisplay from './UsersDisplay';
import Footer from '../footer/Footer';
import AppHeader from './AppHeader';
import AppSideBar from './AppSideBar';

const DashBoard = () => {
    return (
        <div>
            <input type="checkbox" id="check" />
            <AppHeader />
            <AppSideBar />
            <div className="content">
                <FilterBar />
                <UsersDisplay  />
                <Footer />
            </div>
        </div>
    )
}

export default DashBoard;
