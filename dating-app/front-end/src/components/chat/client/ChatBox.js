import React from 'react';

const ChatBox = ({ message : {user, text}, firstname }) => {
    let isSentByCurrentUser = false;

    if (user === firstname)
    {
        isSentByCurrentUser = true;
    }
    
    return isSentByCurrentUser ?
            (
                <div className="chat self">
                    <div className="user-photo text__color">
                        <p>{ firstname }</p>
                    </div>
                    <div className="chat-message">
                        <p>{ text }</p>
                    </div>
                </div>
            )
            : (
                <div className="chat friend">
                    <div className="user-photo text__color">
                        <p>{ user }</p>
                    </div>
                    <div className="chat-message">
                        <p>{text }</p>
                    </div>
                </div>
            )
}

export default ChatBox;
