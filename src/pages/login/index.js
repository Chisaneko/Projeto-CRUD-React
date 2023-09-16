import { useState } from 'react'
import './index.css'


function Login () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
       if (!password || !email){
        alert('Os campos de E-mail e senha são obrigatórios!')
       }
    }

    return (

        <div id="login-box">

            <h1>-- LOGIN --</h1>

            <div className='row'>
                <div className='center-row'>
                    <label htmlFor="email">E-mail</label>
                    <input id="input-email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="exemplo@email.com" type="email"/>
                </div>
            </div>

            <div className='row'>
                <div className='center-row'>
                    <label htmlFor="password">Senha</label>
                    <input id="input-password" onChange={(e) =>setPassword(e.target.value)} value={password} type="password"/>
                    <p className='forgot'>Esqueceu a senha?</p>
                </div>
            </div>

            <div className='row center'>
                <button onClick={login}>Entrar</button>
            </div>

            <div className='row center'>
                <p className='decoration'>.:</p>
            </div>

        </div>
    )
}

export default Login