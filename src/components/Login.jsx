import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
            <div className='login'>
                <input type='text' name='email' id='email' placeholder='email' />
                <input type='password' name='password' id='password' placeholder='password' />
                <button className='base-button login-button'>Iniciar Sesion</button>
                <button className='base-button sign-in-button'>Registrarse</button>
            </div>
        </div>
    )
}

export default Login
