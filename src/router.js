import Login from './pages/login'
import Home from './pages/home'
import Cliente from './pages/clientes'
import Produto from './pages/produtos'
import Menu from './components/menu'
import Modal from  './components/modal'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Router(){
    return(
        <BrowserRouter>
            <Menu/>
            <Modal/>
            <Routes>
                <Route  exact path="/" element={<Home/>}/>
                <Route  path="/login" element={<Login/>}/>
                <Route  path="/clientes" element={<Cliente/>}/>
                <Route  path="/produtos" element={<Produto/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router