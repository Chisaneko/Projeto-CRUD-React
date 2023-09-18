import './index.css'

function Cliente (){
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
            </tbody>
        </table>
        </div>
    )
}

export default Cliente