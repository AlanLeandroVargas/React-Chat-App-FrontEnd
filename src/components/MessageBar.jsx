import React, { useState } from 'react'
import './MessageBar.css'

const MessageBar = () => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (event) => 
        {
            if(event.key === 'Enter')
                {
                    alert(`Enter key pressed with value: ${inputValue}`)
                }
        };
    const handleChange = (event) => 
        {
            setInputValue(event.target.value)
        }

    return (
        <>
        <input type="text" name='message' id='message' value={inputValue} onChange={handleChange} onKeyDown={handleKeyPress} />
        </>
    )
}

export default MessageBar
