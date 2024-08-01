import React from 'react'
import Contact from './Contact'
import Message from './Message'
import MessageBar from './MessageBar'
import './Chat.css'
import placeholder from '../assets/images/placeholder.jpg'

const Chat = () => {
    return (
        <>
            <header>
                <div className='message-search'>
                    <h1>Messages</h1>
                    <input type='text' name='searchBar' id='searchBar'/>
                </div>
                <div className='chat-status'>
                    <img src={ placeholder } alt="" className='chat-status-profile-picture' />
                    <div className='chat-status-contact-information'>
                        <h2>Name placeholder</h2>
                        <h3>Status</h3>
                    </div>                    
                </div>
            </header>
            <main>
                <div className='contacts'>
                    <Contact></Contact>
                    <Contact></Contact>
                    <Contact></Contact>
                    <Contact></Contact>
                </div>
                <div className='chat'>
                    <div className='chat-messages'>   
                        <Message currentUsername={'Julio'} username={'Julio'} message={'Hola Mundo!'} time={'22:18'}></Message>                                         
                        <Message currentUsername={'Julio'} username={'Juan'} message={'Adios Mundo!'} time={'23:00'}></Message>
                        <Message currentUsername={'Julio'} username={'Pedro'} message={'UN MENSAJE EN MAYUSCULAS'} time={'00:00'}></Message>
                    </div>           
                    <MessageBar></MessageBar>                                                 
                </div>
            </main>            
        </>
    )
}

export default Chat
