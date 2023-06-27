    // Tela Inicial

    let listaImagem = ['../Imagens/Vingadores.jpg','../Imagens/Mario.jpg','../Imagens/FastAndFurious.jpg']

    let indexAtual = 0
    let imagem = document.getElementById("img")

    
    function avancarImg(){

    
      if(indexAtual < listaImagem.length-1){
        indexAtual += 1
        imagem.src = listaImagem[indexAtual]
      }
    
    }
    function voltarImg(){
    
      if(indexAtual > 0){
        indexAtual -= 1
        imagem.src = listaImagem[indexAtual]
      }
    
    }





// Tela de login

function cadastrarConta(){

    window.location.href = "../HTMLS/cadastro.html"
    


}

function logarConta(){
    let emailLogar = document.getElementById("emailLogin").value
    let senhaLogar = document.getElementById("senhaLogin").value
    let loginIncorreto = document.getElementById("invalidezLogin")

    usuarios = JSON.parse(localStorage.getItem('usuarioSalvo'))

    for(i = 0; i < usuarios.length; i++){

        if(usuarios[i].emailCadastrado == emailLogar && usuarios[i].senhaCadastrada == senhaLogar){
            
            window.location.href = "../HTMLS/inicial.html"

        }else if(usuarios[i].emailCadastrado != emailLogar && usuarios[i].senhaCadastrada == senhaLogar){

            loginIncorreto.innerHTML = ""
            loginIncorreto.innerHTML = "Usuário inválido"

        }else if(usuarios[i].emailCadastrado == emailLogar && usuarios[i].senhaCadastrada != senhaLogar) {

            loginIncorreto.innerHTML = ""
            loginIncorreto.innerHTML = "Senha inválida"

        }else{

            loginIncorreto.innerHTML = ""
            loginIncorreto.innerHTML = "Dados inválidos"

        }

    }

}

// Tela de cadastro

let usuarios = []
let usuario


function cadastrar(){
let email = document.getElementById("emailCadastro").value
let senhaCadastro = document.getElementById("senhaCadastro").value
let confirmarSenhaCadastro = document.getElementById("confirmSenhaCadastro").value
let telefone = document.getElementById("telefoneCadastro").value
let invalido = document.getElementById("invalidezCadastro")




    
    if(email != "" && senhaCadastro != "" && confirmarSenhaCadastro != "" && telefone != "" && senhaCadastro == confirmarSenhaCadastro){
    invalido.innerHTML = ""
    usuario = {
        emailCadastrado: email,
        senhaCadastrada: senhaCadastro,
        confirmarSenha: confirmarSenhaCadastro,
        telefoneCadastrado : telefone
        
    }

        usuario.emailCadastrado = email
        usuario.senhaCadastrada = senhaCadastro
        usuario.confirmarSenha = confirmarSenhaCadastro
        usuario.telefoneCadastrado = telefone

        usuarios = JSON.parse(localStorage.getItem('usuarioSalvo'))

        if(usuarios == null){
    
            usuarios = []
    
            usuarios.push(usuario)
            localStorage.setItem('usuarioSalvo', JSON.stringify(usuarios))

    
        }else{
    
            usuarios.push(usuario)
            localStorage.setItem('usuarioSalvo', JSON.stringify(usuarios))

    
        }
        
        window.location.href = "../HTMLS/login.html"

        LimpaInputsCadastro()



    }else if(email == "" && senhaCadastro != "" && confirmarSenhaCadastro != "" && telefone != "" && senhaCadastro == confirmarSenhaCadastro){
            invalido.innerHTML = ""
            invalido.innerHTML = "Email não preenchido"
        }
        else if(email != "" && senhaCadastro == "" && confirmarSenhaCadastro != "" && telefone != "" && senhaCadastro != confirmarSenhaCadastro){
            invalido.innerHTML = ""
            invalido.innerHTML = "Senha não preenchida"
        }
        else if(email != "" && senhaCadastro != "" && confirmarSenhaCadastro == "" && telefone != "" && senhaCadastro != confirmarSenhaCadastro){
            invalido.innerHTML = ""
            invalido.innerHTML = "Confirme sua senha"
        }
        else if(email != "" && senhaCadastro != "" && confirmarSenhaCadastro != "" && telefone == "" && senhaCadastro == confirmarSenhaCadastro){
            invalido.innerHTML = ""
            invalido.innerHTML = "Confirme seu telefone"
        }
        else if(email == "" && senhaCadastro == "" && confirmarSenhaCadastro == "" && telefone == "" && senhaCadastro == confirmarSenhaCadastro){
            invalido.innerHTML = ""
            invalido.innerHTML = "Preencha os campos"
        }

        

        
    }


    // Limpar Inputs Cadastro

    function LimpaInputsCadastro(){

        document.getElementById("emailCadastro").value = ''
        document.getElementById("senhaCadastro").value = ''
        document.getElementById("confirmSenhaCadastro").value = ''
        document.getElementById("telefoneCadastro").value = ''
    
    }



    
        
    
