import React, { Component } from 'react';
import ChatLogs from './ChatLogs';
import CreateChat from './CreateChat';

export class ChatSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            user: props.user,
            receiver: props.receiver,
            chats: []
        }
    }

    componentDidMount() {
        this.chats_Adder = setInterval(() => {
            //fetch chats from database
            fetch('http://localhost:3000/getchats')
            .then(response => response.json())
            .then(chats => {
                if (chats) {
                    this.setState({ chats: chats });
                }
            })
            .catch(err => console.log('an error occured'));
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.chats_Adder);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { message, user, receiver } = this.state;
        fetch('http://localhost:3000/sendmessage', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                message: message,
                sender: user.email,
                receiver: receiver[0].email
            })
        })
        this.setState({ message: '' });
    }

    handleChange = (e) => this.setState({ [ e.target.name ] : e.target.value });

    render() {
        const { receiver, user, chats } = this.state;
        const chatz = chats && chats.filter(chat => (chat.sender === user.email && chat.receiver === receiver[0].email) || (chat.sender === receiver[0].email && chat.receiver === user.email));
        return (
            <div className="chat-container">
                <div className="chatbox">
                    <p className="chat-with">
                        <img src={receiver[0].photourl} alt="img"/>
                        <span className="chat-name"> 
                            { receiver[0].firstname[0].toUpperCase() + receiver[0].firstname.slice(1) + ' ' } 
                            { receiver[0].lastname[0].toUpperCase() + receiver[0].lastname.slice(1) }
                        </span> 
                    </p>
                    <ChatLogs 
                        chats={chatz}
                        user={user}
                        receiver={receiver}
                    />
                    <CreateChat 
                        message={this.state.message}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </div>
            </div>
        )
    }
}

export default ChatSummary;
