import React from 'react';
import './DashBoard.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import FilterBar from './FilterBar';
import UsersDisplay from './UsersDisplay';
//import { users } from './users';

const DashBoard = () => {
    return (
        <div>
            <Nav/>
            <div className="dashboard">
                <FilterBar />
                <UsersDisplay  />
            </div>
            <Footer/>
        </div>
    )
}

export default DashBoard;
