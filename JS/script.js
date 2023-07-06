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
    function linkPageFilmes(){
        window.location.href = "../HTMLS/telaFilmes.html"
    }

    // Direcionar para a seleção de assentos
    function direcionarAssentos(){

        window.location.href = "../HTMLS/assentosSA.html"
    
    }



        
    



// Tela de login

function linkPageCadastrar(){

    window.location.href = "../HTMLS/cadastro.html"
    

}
function login(){
    window.location.href = "../HTMLS/login.html"
}

function logarConta(){
    let emailLogar = document.getElementById("emailLogin").value
    let senhaLogar = document.getElementById("senhaLogin").value
    let loginIncorreto = document.getElementById("invalidezLogin")

    usuarios = JSON.parse(localStorage.getItem('usuarioSalvo'))

    for(i = 0; i < usuarios.length; i++){

        if(usuarios[i].emailCadastrado == emailLogar && usuarios[i].senhaCadastrada == senhaLogar){
            
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarios[i].emailCadastrado))
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

    // Tela Cadastro

    let usuarios = []
    let usuario

    
        function cadastrarConta(){
            let email = document.getElementById("emailCadastro").value
            let senhaCadastro = document.getElementById("senhaCadastro").value
            let confirmarSenhaCadastro = document.getElementById("confirmSenhaCadastro").value
            let telefone = document.getElementById("telefoneCadastro").value
            let invalido = document.getElementById("invalidezCadastro")
            let existe = false
            
            
            
                
                if(email != "" && senhaCadastro != "" && confirmarSenhaCadastro != "" && telefone != "" && senhaCadastro == confirmarSenhaCadastro){
                    usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []

                    invalido.innerHTML = ""
            
                
                    
                for(i = 0; i < usuarios.length; i++){
                    
                    if(usuarios[i].emailCadastrado == email){
                        existe = true
                    }
            
                }
            
                /////////////////////////////
                if(!existe){
            
                    usuario = {
                        emailCadastrado: email,
                        senhaCadastrada: senhaCadastro,
                        confirmarSenha: confirmarSenhaCadastro,
                        telefoneCadastrado : telefone,
                        filme: '' 
                        
                    }
                    console.log(usuario);
                    console.log(usuarios);
                
                        usuario.emailCadastrado = email
                        usuario.senhaCadastrada = senhaCadastro
                        usuario.confirmarSenha = confirmarSenhaCadastro
                        usuario.telefoneCadastrado = telefone

                        
                
                        if(usuarios == null){
                    
                            usuarios = []
                        }    
                            usuarios.push(usuario)
                            localStorage.setItem('usuarioSalvo', JSON.stringify(usuarios))
                
                        
                        window.location.href = "../HTMLS/login.html"
                
                        LimpaInputsCadastro()
                
                
                
                    }else{
                        invalido.innerHTML = ""
                        invalido.innerHTML = "E-mail ja cadastrado"
                    }
                
            
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


// Comprar Assentos

function comprarAssentos(){

    window.location.href = "../HTMLS/assentosSA.html"
    // atualizarPoltrona(0)
    
}



// Assentos

// let vendidos = []
let cinema = [{filme: 'Vingadores',assentosDisponiveis: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}]
let cadeirasSelecionadas = []

let somaAssentos 


function atualizarPoltrona(iFilme){

    for(i = 0; i < 32; i++){

        let id = 'cad' + i
        
        if(!cinema[iFilme].assentosDisponiveis.includes(i)){
            document.getElementById(id).style.backgroundColor = 'red'
        }
        else{
            console.log(id);
            document.getElementById(id).style.backgroundColor = ''
        }

    }
    
}

function selecionarCadeira(cadeira){

// let filmeSelecionado = document.getElementById("filme").value
let preco = 10
let listaAssentos = document.getElementById("contagemAssento")
let totalPreco = document.getElementById("total")

    if(cinema[0].assentosDisponiveis.includes(cadeira)){
        if (!cadeirasSelecionadas.includes(cadeira)){
            document.getElementById(('cad' + cadeira)).style.backgroundColor = 'green'
            cadeirasSelecionadas.push(cadeira) 
        }else{
            document.getElementById(('cad' + cadeira)).style.backgroundColor = ''
            cadeirasSelecionadas.splice(cadeirasSelecionadas.indexOf(cadeira), 1)
        }
    
        somaAssentos = cadeirasSelecionadas.length * preco
        
        listaAssentos.innerHTML = cadeirasSelecionadas
        totalPreco.innerHTML = somaAssentos
    }



}







// Direcionar para a página do usuário
function reservarAssentos(){

    let comprinha = {
        nomeFilme: 'Os vingadores',
        cadeiras: cadeirasSelecionadas,
        valor: somaAssentos
    }
    usuarios = JSON.parse(localStorage.getItem('usuarioSalvo')) || []
    emailLogado = JSON.parse(localStorage.getItem("usuarioLogado"))
    for(i = 0; i < usuarios.length; i++){
        alert(emailLogado+ " "+ usuarios[i].emailCadastrado );
        
        if(emailLogado == usuarios[i].emailCadastrado){
            alert("ACHEI PORRA")
            usuarios[i].filme = comprinha

        }

    }

    // localStorage.setItem("infoCompra", JSON.stringify(comprinha))
    localStorage.setItem("usuarioSalvo", JSON.stringify(usuarios))
    cadeirasSelecionadas = []
    window.location.href = "../HTMLS/telaPerfil.html"

}

function carregarPerfil(){

    // pegar info local storage

}




    
        
    
