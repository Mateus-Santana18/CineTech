

function cadastrarConta(){

    document.getElementById("containerLogin").style.display = 'none'
    document.getElementById("containerCadastro").style.display = 'block' 

}

let usuarios = []
let cadastroDados


function cadastrar(){
let email = document.getElementById("emailCadastro").value
let senhaCadastro = document.getElementById("senhaCadastro").value
let confirmarSenhaCadastro = document.getElementById("confirmSenhaCadastro").value
let telefone = document.getElementById("telefoneCadastro").value
let invalido = document.getElementById("invalidez")

    if(email != "" && senhaCadastro != "" && confirmarSenhaCadastro != "" && telefone != "" && senhaCadastro == confirmarSenhaCadastro){
        invalido.innerHTML = ""
    cadastroDados = {
        email: document.getElementById("emailCadastro").value,
        senha: document.getElementById("senhaCadastro").value,
        confirmarSenha: document.getElementById("confirmSenhaCadastro").value,
        telefone : document.getElementById("telefoneCadastro").value
        
    }

        usuarios.push(cadastroDados)
        document.getElementById("containerLogin").style.display = 'block'
        document.getElementById("containerCadastro").style.display = 'none' 
    }else if(email == "" && senhaCadastro != "" && confirmarSenhaCadastro != "" && telefone != "" && senhaCadastro == confirmarSenhaCadastro){
            invalido.innerHTML = ""
            invalido.innerHTML = "Email não preenchido"
        }
        if(email != "" && senhaCadastro == "" && confirmarSenhaCadastro != "" && telefone != "" && senhaCadastro != confirmarSenhaCadastro){
            invalido.innerHTML = ""
            invalido.innerHTML = "Senha não preenchida"
        }
       if(email != "" && senhaCadastro != "" && confirmarSenhaCadastro == "" && telefone != "" && senhaCadastro != confirmarSenhaCadastro){
            invalido.innerHTML = ""
            invalido.innerHTML = "Confirme sua senha"
        }
        if(email != "" && senhaCadastro != "" && confirmarSenhaCadastro != "" && telefone == "" && senhaCadastro == confirmarSenhaCadastro){
            invalido.innerHTML = ""
            invalido.innerHTML = "Confirme seu telefone"
        }
        if(email == "" && senhaCadastro == "" && confirmarSenhaCadastro == "" && telefone == "" && senhaCadastro == confirmarSenhaCadastro){
            invalido.innerHTML = ""
            invalido.innerHTML = "Preencha os campos"
        }




    }


    function logar(){
        let emailLogar = document.getElementById("emailLogin").value
        let senhaLogar = document.getElementById("senhaLogin").value
        let invalidezLogar = document.getElementById("invalidezLogin").value

        for(i = 0; i < usuarios.length; i++){

            if(usuarios[i].nome == emailLogar && usuarios[i].senha == senhaLogar){

            }else if(usuarios[i].nome != emailLogar && usuarios[i].senha == senhaLogar){
                invalidezLogar.innerHTML = ""
                invalidezLogar.innerHTML = "Usuário inválido"
            }if(usuarios[i].nome == emailLogar && usuarios[i].senha != senhaLogar) {
                invalidezLogar.innerHTML = ""
                invalidezLogar.innerHTML = "Senha inválida"
            }else{
                invalidezLogar.innerHTML = ""
                invalidezLogar.innerHTML = "Dados inválidos"
            }

        }
    
    }
        
    
    
