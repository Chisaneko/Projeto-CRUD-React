import { useState } from 'react'
import './index.css'
import usuarioService from '../../service/usuarioService'

function Login () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [aviso, setAviso] = useState('')

    const login = () => {
       if (!password || !email){
        setAviso('Campos de E-mail e Senha são obrigatórios')
        return
       }
       usuarioService.autenticar(email,password)
       .then(response => {
            usuarioService.salvarTokenUsuario(response.data.token)
            usuarioService.salvarUsuario(response.data.usuario)
            window.location='/'
       })
       .catch(erro =>{
         setAviso('Campos de E-mail ou Senha estão incorretos!')
       })


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
                <button id="login-button" onClick={login}>Entrar</button>
            </div>

            <div className='row center'>
                <p id='aviso'>{aviso}</p>
            </div>

            <div className='row center'>
                <p className='decoration'>.:</p>
            </div>



        </div>
    )
}

export default Login