import './index.css'
import './modal.css'
import clienteService from '../../service/clienteService'
import { useEffect } from 'react' 
import { useState } from 'react'
import Cliente from '../../models/cliente'

function ClientePage (){

    var modalGrande = document.getElementById('modal-grande')

    const [modoEdicao, setModoEdicao] = useState(false)
    const [clientes, setClientes] = useState([])
    const [cliente, setCliente] = useState(new Cliente())
    const [aviso, setAviso] = useState('')


    function abrirModal(editar){
        if(editar){
            modalGrande.style.display = "block"
            setModoEdicao(true)
            setAviso('')
        }else{
            modalGrande.style.display = "block"
            setModoEdicao(false)
            setAviso('')

        }
    }

    useEffect(() => {
       clienteService.obter()
       .then(response =>{
            setClientes(response.data)
       })
       .catch(erro =>{
        console.log(erro)
       }) 
    },[])
    



    const adcionar = () =>{
        abrirModal(false)
    }
    
    const adcionarClienteBackend = (cliente) => {
        clienteService.adcionar(cliente)
        .then(response => {
            setClientes(lista => [...lista, new Cliente(response.data)])
            fecharModal()
        })
        .catch(erro =>{
        })
    }

    const atualizarClienteBackend = (cliente) => {

    }

    const editar = (id) => {
        abrirModal(true)
    }

    const excluir = (id) => {
    }
    
    const salvar = () => {
        if (!cliente.cpfOuCnpj || !cliente.email || !cliente.nome || !cliente.telefone){
            setAviso('É obrigatório preencher todos os campos!')
            return
        }

        if(modoEdicao){
            atualizarClienteBackend(cliente)
        }else{
            adcionarClienteBackend(cliente)
        }
    }

    const fecharModal = () =>{
        limparCliente()
        modalGrande.style.display = "none"
    }

    const limparCliente = () => {
        setCliente({...cliente, id: '',nome: '',cpfOuCnpj: '',dataCadastro: '',telefone:'', email:''})
    }


    return (
        <div className='arrange'>
        <h1 id="titulo">Clientes</h1>
        <button id="botao-adcionar-cliente" onClick={adcionar}>Adcionar Cliente</button>
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
            {clientes.map(cli => (
                <tr>
                    <td>{cli.id}</td>
                    <td>{cli.nome}</td>
                    <td>{cli.cpfOuCnpj}</td>
                    <td>{cli.email}</td>
                    <td>{cli.telefone}</td>
                    <td>{new Date(cli.dataCadastro).toLocaleDateString()}</td>
                    <td>
                        <button onClick={editar} className='botao-tabela'>Editar</button>
                        <button onClick={excluir} className='botao-tabela'>Excluir</button>
                    </td>
                </tr>
            ))} 
            </tbody>
        </table>
        <div id="modal-grande" className="modal">
        <div id="modal-grande-conteudo">
            <div className="modal-header">
                <span id="modal-grande-fechar" onClick={fecharModal} className="modal-botao-fechar">&times;</span>
                <p id="modal-grande-titulo">{modoEdicao ? "Editar cliente" : "Adcionar cliente"}</p>
            </div>
            <div id="modal-grande-body">
                <div className="modal-row">
                        <div id="modal-container-id" className="modal-input row-size-1">
                        <label htmlFor="modalclientid">ID</label>
                        <input type="text" disabled className="disabled" id="modalclientid" name="modalclientid" value={cliente.id} onChange={(e) => setCliente({...cliente, id: e.target.value})}/>
                    </div>
                    <div id="modal-container-nome" className="modal-input row-size-11">
                        <label htmlFor="modalclientnome">Nome</label>
                        <input type="text"  id="modalclientnome" name="modalclientnome" value={cliente.nome} onChange={(e) => setCliente({...cliente, nome: e.target.value})}/>
                    </div>
                </div>
                <div className="modal-row">
                    <div id="modal-container-cpf"  className="modal-input row-size-3">
                        <label htmlFor="modalclientcpf">CPF</label>
                        <input ype="text" id="modalclientcpf" name="modalclientcpf" value={cliente.cpfOuCnpj} onChange={(e) => setCliente({...cliente, cpfOuCnpj: e.target.value})}/>
                    </div>
                    <div className="modal-input row-size-3" >
                        <label htmlFor="modalclientemail">E-Mail</label>
                        <input ype="email" id="modalclientemail" name="modalclientemail" value={cliente.email} onChange={(e) => setCliente({...cliente, email: e.target.value})}/>
                    </div>   
                    <div className="modal-input row-size-3">
                        <label htmlFor="modalclientphone">Telefone</label>
                        <input type="tel" id="modalclientphone" name="modalclientphone" value={cliente.telefone} onChange={(e) => setCliente({...cliente, telefone: e.target.value})}/>
                    </div>
                    <div className="modal-input row-size-3">
                        <label  htmlFor="modalclientdata">Data Cadastro</label>
                        <input disabled type="text" className="disabled" id="modalclientdata" name="modalclientdata" value={cliente.dataCadastro} onChange={(e) => setCliente({...cliente, dataCadastro: e.target.value})}/>
                    </div>
                </div>
                <div className="modal-input row-size-12">
                        <p className='aviso'>{aviso}</p>
                </div>
                <br/>
                <br/>
                <div className="modal-row flex-end bigline-row">
                    <button  className="row-size-3 modal-button" onClick={salvar}>Salvar</button>
                    <button  className="row-size-3 modal-button" onClick={fecharModal}>Cancelar</button>

                </div>
            </div>
        </div>
    </div>
    </div>

        
    )
}

export default ClientePage