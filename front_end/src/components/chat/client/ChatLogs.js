import React from 'react';
import ChatBox from './ChatBox';
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatLogs = ({ user, receiver, chats }) => {
    const mapped = chats && chats.map(chat => <ChatBox key={chat.id} chat={chat} sender={user} receiver={receiver[0]} />);
    return (
        <div className="chatlogs">
            <ScrollToBottom>
            {
                !mapped.length ? 
                    <div className="no_data">
                        <p>You don't have any chats!!</p>
                    </div>
                    :
                    mapped
            }
            </ScrollToBottom>
        </div>
    )
}

export default ChatLogs;
