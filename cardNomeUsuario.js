class CardNomeUsuario{
    constructor(){
        this.nomeUsuario = document.getElementById("nome-usuario")
    }

    buscaNomeUsuario(dados){
        let cardName = ''
        dados.map(function (elemento){            
            localStorage.setItem("nome-do-cabra", elemento.nome)            
            console.log(elemento)
            cardName = `<a>${localStorage.getItem("nome-do-cabra")}<a>`
        });
        this.nomeUsuario.innerHTML = cardName
    }  

    
}

