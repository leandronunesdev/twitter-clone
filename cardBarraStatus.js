class CardBarraStatus{
    constructor(){
        this.BarraStatus = document.getElementById("barra-status")
    }

    buscaBarraStatus(dados){
        let cardBarraStatus = ''
        dados.map(function (elemento){ 
            console.log(elemento)
            cardBarraStatus = `
            <ul>
              <li class="profile-stats-item-active">
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Tweets</span>
                  <span class="profile-stats-item profile-stats-item-number">${elemento.quantidade_tweets}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Following</span>
                  <span class="profile-stats-item profile-stats-item-number">${elemento.seguindo}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Followers</span>
                  <span class="profile-stats-item profile-stats-item-number">${elemento.seguidores}</span>
                </a>
              </li>
              <li>
                <a>
                  <span class="profile-stats-item profile-stats-item-label">Likes</span>
                  <span class="profile-stats-item profile-stats-item-number">${elemento.likes}</span>
                </a>
              </li>
            </ul>            
            `
        });
        this.BarraStatus.innerHTML = cardBarraStatus
    }  

    
}

