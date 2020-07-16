import React from 'react';

const CreateChat = ({ message, handleChange, handleSubmit }) => {
    return (
        <div className="chat-form">
            <form onSubmit={handleSubmit}>
                <textarea 
                    onChange={handleChange} 
                    type="text" 
                    value={message} 
                    name="message" 
                    placeholder="Write your message here..."
                    required
                >
                </textarea>
                <button>Send</button>
            </form>
        </div>
    )
}

export default CreateChat;
