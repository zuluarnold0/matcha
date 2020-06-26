import React from 'react';
import './Notification.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import NotificationDetails from './NotificationDetails';

class Notification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            views: []
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
        const { views } = this.state;
        return (
            <div>
                <Nav/>
                <NotificationDetails views={views}/>
                <Footer/>     
            </div>
        )
    }
}

export default Notification;
