import service from "./service";

function autenticar(email,senha){
    return new Promise((resolve, reject) => {
        service.post('/login', {email, senha})
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    })
}

function salvarTokenUsuario(token) {
    localStorage.setItem('token', token)
}

function salvarUsuario(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario))
}

function obterUsuario(){
    return localStorage.getItem("usuario") || "{}"
}

function sairDoSistema(){
   localStorage.removeItem("token")
   localStorage.removeItem("usuario")
   direcionarTelaLogin()
    
}

function direcionarTelaLogin(){
    window.location='/login'
}

function usuarioEstaLogado(){
    let token = localStorage.getItem('token')
    return !!token
}

function validarUsuarioAutenticado(){
    let logado = usuarioEstaLogado()
    if(window.location.pathname ==  "/login"){
        if (logado){
            window.location='/'
        }
    } else if(!logado && window.location.pathname != "/login"){
        direcionarTelaLogin()
    }
}

validarUsuarioAutenticado()

export default {
    autenticar,
    salvarTokenUsuario,
    salvarUsuario,
    obterUsuario,
    sairDoSistema,
    direcionarTelaLogin,
    usuarioEstaLogado,
    validarUsuarioAutenticado

}