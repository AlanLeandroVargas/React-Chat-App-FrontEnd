import React from 'react'
import './SignIn.css'

const SignIn = () => {
    return (
        <div className='sign-in-container'>
            <div className='sign-in'>
                <input type='text' name='name' id='name' placeholder='name'/>
                <input type='text' name='lastName' id='lastName' placeholder='last name'/>
                <input type='text' name='email' id='email' placeholder='email' />
                <input type='password' name='password' id='password' placeholder='password' />
                <input type='password' name='confirmedPassword' id='confirmedPassword' placeholder='confirm password'/>
                <button className='base-button sign-in-button'>Registrarse</button>
            </div>
        </div>
    )
}

export default SignIn
