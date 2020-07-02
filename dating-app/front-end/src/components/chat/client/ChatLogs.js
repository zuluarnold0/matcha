import React from 'react';
import ChatBox from './ChatBox';
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatLogs = ({ messages, firstname }) => {
    return (
        <div className="chatlogs">
            <ScrollToBottom>
            {
                messages && messages.map((message, i) => <div key={i}><ChatBox message={message} firstname={firstname} /></div>)
            }
            </ScrollToBottom>
        </div>
    )
}

export default ChatLogs;
