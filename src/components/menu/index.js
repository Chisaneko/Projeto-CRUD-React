import './index.css'
import {Link, useLocation} from 'react-router-dom'
import usuarioService from '../../service/usuarioService'

function Menu(){

    const logout = () =>{
        usuarioService.sairDoSistema()
    }
    if(useLocation().pathname !== '/login'){
        return (
            <ul className='menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/clientes'>Clientes</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link onClick={logout} to='/login'>Sair</Link></li>
            </ul>
        ) 
    } else {
        return null 
    }
}

export default Menu