import React from 'react';

const CreateChat = ({ message, setMessage, sendMessage }) => {
    return (
        <div className="chat-form">
            <form>
                <textarea
                    type="text"
                    placeholder="Write your message here..."
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                >
                </textarea>
                <button onClick={(event) => sendMessage(event)}>Send</button>
            </form>
        </div>
    )
}

export default CreateChat;
