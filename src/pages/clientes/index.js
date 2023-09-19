import './index.css'
import clienteService from '../../service/clienteService'
import { useEffect } from 'react' 
import { useState } from 'react'

function Cliente (){

    const [clientes, setClientes] = useState([])

    useEffect(() => {
       clienteService.obter()
       .then(response =>{
            setClientes(response.data)
       })
       .catch(erro =>{
        console.log(erro)
       }) 
    },[])
    
    const editar = (id) => {
        alert(id)
    }

    const excluir = (id) => {
        alert(id)
    }


    return (
        <div className='arrange'>
        <h1 id="titulo">Clientes</h1>
        <button id="botao-adcionar-cliente">Adcionar Cliente</button>
        <hr/>
        <table id="tabela">
            <thead id="tabela-head"> 
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Data Cadastro</th>
                    <th>Ferramentas</th> 
                </tr>               
            </thead>
            <tbody id="tabela-body">  
            {clientes.map(cliente => (
                <tr>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.cpfOuCnpj}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefone}</td>
                    <td>{cliente.dataCadastro}</td>
                    <td>
                        <button onClick={editar} className='botao-tabela'>Editar</button>
                        <button onClick={excluir} className='botao-tabela'>Excluir</button>
                    </td>
                </tr>
            ))} 
            </tbody>
        </table>
        </div>
    )
}

export default Cliente