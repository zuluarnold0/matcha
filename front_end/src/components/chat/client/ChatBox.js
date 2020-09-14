import React from 'react';
import moment from 'moment';

const ChatBox = ({ chat, sender, receiver }) => {
    const fromWho = chat.sender === sender.email ?

        <div className="chat self">
            <div className="user-photo">
                <img src={ `${sender.photourl}` } alt="img" />
            </div>
            <div className="chat-message">
                <p>{ chat.message }</p>
                <span className="time__">{moment(chat.time_).calendar()}</span>
            </div>
        </div>
            :
        <div className="chat friend">
            <div className="user-photo">
                <img src={ `${receiver.photourl}` } alt="img" />
            </div>
            <div className="chat-message">
                <p>{ chat.message }</p>
                <span className="time__">{moment(chat.time_).calendar()}</span>
            </div>
        </div>

        return <div> { fromWho } </div>
}

export default ChatBox;
