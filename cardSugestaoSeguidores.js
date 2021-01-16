class CardSugestaoSeguidores{
    constructor(){
        this.sugestaoSeguidores = document.getElementById("sugestao-seguidores")
    }

    buscaSugestaoSeguidores(dados){
        let cardSugestaoSeguidores = ''
        dados.followers.map(function (elemento){ 
            console.log(elemento)
            cardSugestaoSeguidores += `
            <li class="tweet-card">
                <div class="tweet-content">
                <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                <div class="tweet-header">
                    <span class="fullname">
                    <strong>${elemento.nome}</strong>
                    </span>
                    <span class="username">${elemento.usuario}</span>
                </div>

                <button class="btn btn-follow">Follow</button>
                </div>
            </li>            
            `
        });
        this.sugestaoSeguidores.innerHTML = cardSugestaoSeguidores
    }  

    
}

