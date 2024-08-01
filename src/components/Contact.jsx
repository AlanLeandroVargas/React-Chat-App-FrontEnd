import React from 'react'
import './Contact.css'
import placeholder from '../assets/images/placeholder.jpg'

const Contact = () => {
    return (
        <>
            <div className='contact'>
                <img src={placeholder} alt="" />
                <div className='contact-content'>
                    <div className='contact-content-header'>
                        <h4>Username</h4>
                        <p>21:58</p>
                    </div>
                    <div className='contact-content-body'>
                        <p>Message</p>
                        <p>1</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
