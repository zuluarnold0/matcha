import React from 'react';
import ChatBox from './ChatBox';
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatLogs = ({ user, receiver, chats }) => {
    return (
        <div className="chatlogs">
            <ScrollToBottom>
            {
                chats && chats.map(chat => <ChatBox key={chat.id} chat={chat} sender={user} receiver={receiver[0]} />)
            }
            </ScrollToBottom>
        </div>
    )
}

export default ChatLogs;
