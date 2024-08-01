import React from 'react'
import './Message.css'

function UserMessage({ currentUsername ,username, message, time }) {
    if (username == currentUsername) {
        return <>
            <div className='message-content own'>
                <div className='message-content-username'>
                    <h4>{username}</h4>
                </div>
                <div className='message-content-text'>
                    <p>{message}</p>
                    <p>{time}</p>
                </div>
            </div>
        </>
    }
        return <>
            <div className='message-content'>
                <div className='message-content-username'>
                    <h4>{username}</h4>
                </div>
                <div className='message-content-text'>
                    <p>{message}</p>
                    <p>{time}</p>
                </div>
            </div>
        </>
    
}

const Message = ({currentUsername, username, message, time }) => {
    return (
        <>
            <div className='message'>
                <UserMessage currentUsername={currentUsername} username={username} message={message} time={time}></UserMessage>
            </div>
        </>
    )
}

export default Message
