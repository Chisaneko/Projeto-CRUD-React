import './index.css'

function Modal(){
    return(
        <div id="modal-grande" className="modal">
        <div id="modal-grande-conteudo">
            <div className="modal-header">
                <span id="modal-grande-fechar" className="modal-botao-fechar">&times;</span>
                <p id="modal-grande-titulo"></p>
            </div>
            <div id="modal-grande-body">
                <div className="modal-row">
                        <div id="modal-container-id" className="modal-input row-size-1">
                        <label htmlFor="modalclientid">ID</label>
                        <input type="text" disabled className="disabled" id="modalclientid" name="modalclientid"/>
                    </div>
                    <div id="modal-container-nome" className="modal-input row-size-11">
                        <label htmlFor="modalclientnome">Nome</label>
                        <input type="text"  id="modalclientnome" name="modalclientnome"/>
                    </div>
                </div>
                <div className="modal-row">
                    <div id="modal-container-cpf"  className="modal-input row-size-3">
                        <label htmlFor="modalclientcpf">CPF</label>
                        <input ype="text" id="modalclientcpf" name="modalclientcpf"/>
                    </div>
                    <div className="modal-input row-size-3" >
                        <label htmlFor="modalclientemail">E-Mail</label>
                        <input ype="email" id="modalclientemail" name="modalclientemail"/>
                    </div>   
                    <div className="modal-input row-size-3">
                        <label htmlFor="modalclientphone">Telefone</label>
                        <input type="tel" id="modalclientphone" name="modalclientphone"/>
                    </div>
                    <div className="modal-input row-size-3">
                        <label  htmlFor="modalclientdata">Data Cadastro</label>
                        <input disabled type="text" className="disabled" id="modalclientdata" name="modalclientdata"/>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="modal-row flex-end bigline-row">
                    <button  className="row-size-3 modal-button">Salvar</button>
                    <button  className="row-size-3 modal-button">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal