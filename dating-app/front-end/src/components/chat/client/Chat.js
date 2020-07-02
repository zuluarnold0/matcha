import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Nav from '../../nav/Nav';
import Footer from '../../footer/Footer';
import CreateChat from './CreateChat';
import ChatLogs from './ChatLogs';

let socket;

const Chat = ({ location }) => {
    const [ firstname, setFirstName] = useState('');
    // eslint-disable-next-line
    const [ room, setRoom] = useState('');
    const [ match_name, setMatchName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const {firstname, room, match_name } = queryString.parse(location.search);        
        socket = io(ENDPOINT);
        setFirstName(firstname);
        setMatchName(match_name);
        setRoom(room);
        socket.emit('join', { firstname, room }, () => {
            
        });
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    return (
        <div className="chat_main_container">
            <Nav/>
            <div className="chat-container">
                <div className="chatbox">
                    <p className="chat-with">
                        {' ' + match_name }
                    </p>
                    <ChatLogs
                        messages={messages}
                        firstname={firstname}
                    />
                    <CreateChat 
                        message={message} 
                        setMessage={setMessage} 
                        sendMessage={sendMessage}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Chat;