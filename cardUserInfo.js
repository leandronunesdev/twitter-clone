class CardUserInfo{
    constructor(){
        this.userInfo = document.getElementById("user-info")
    }

    buscaUserInfo(dados){
        let cardUserInfo = ''
        dados.map(function (elemento){ 
            console.log(elemento)
            cardUserInfo = `
            <h2 class="profile-element"><a>@${elemento.usuario}</a></h2>
              <a class="profile-element profile-website" hrerf=""><i
              class="octicon octicon-link"></i>&nbsp;${elemento.website}</a>
              <a class="profile-element profile-website" hrerf=""><i
              class="octicon octicon-location"></i>&nbsp;${elemento.local}</a>
              <h2 class="profile-element"><i class="octicon octicon-calendar"></i>Joined ${elemento.cadastro}</h2>
              <button class="btn btn-search-bar tweet-to-btn">Tweet to ${elemento.nome}</button>            
            `
        });
        this.userInfo.innerHTML = cardUserInfo
    }  

    
}

