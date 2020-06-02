import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from '../src/components/auth/Login';
import Forgot from '../src/components/auth/Forgot';
import Register from '../src/components/auth/Register';

class Root extends Component {
    state = {
        current_page: "login"
    }

    changeRoute = (route) => {
        this.setState({
            current_page: route
        })
    }

    render() {
        switch (this.state.current_page){
            case "login":
                return <Login onRouteChange={this.changeRoute}/>;
            case "register":
                return <Register onRouteChange={this.changeRoute} />;
            case "forgot":
                return <Forgot onRouteChange={this.changeRoute} />;
            case "app":
                return <App onRouteChange={this.changeRoute} />;
            default:
                return "Page Not Found!";
        }
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));