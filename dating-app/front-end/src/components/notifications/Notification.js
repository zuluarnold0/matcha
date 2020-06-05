import React from 'react';
import './Notification.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import NotificationDetails from './NotificationDetails';

const Notification = () => {
    return (
        <div>
            <Nav/>
            <NotificationDetails />
            <Footer/>     
        </div>
    )
}

export default Notification;
