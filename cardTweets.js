class CardTweets{
    constructor(){
        this.tuite = document.getElementById("tweet-list")
    }

    buscaTweets(dados){
        let cardTweets = ''
        dados.tweets.map(function (elemento){ 
            console.log(elemento)
            cardTweets += `
            <li class="tweet-card">
              <div class="tweet-content">
                <div class="tweet-header">
                  <span class="fullname">
                    <strong>${elemento.nome}</strong>
                  </span>
                  <span class="username">${elemento.usuario}</span>
                  <span class="tweet-time">- ${elemento.data}</span>
                </div>
                <a>
                  <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                </a>
                <div class="tweet-text">
                  <p class="" lang="es" data-aria-label-part="0">${elemento.mensagem}
                  </p>
                </div>
                <div class="tweet-footer">
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-comment" aria-hidden="true"></i><span> ${elemento.comentarios}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-sync" aria-hidden="true"></i><span> ${elemento.compartilhamentos}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-heart" aria-hidden="true"></i><span> ${elemento.likes}</span>
                  </a>
                </div>
              </div>
            </li>           
            `
        });

        this.tuite.innerHTML = cardTweets
    }  

    
}

