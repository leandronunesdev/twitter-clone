const objetoNomeUsuario = new NomeUsuario()
const objetoCardNomeUsuario = new CardNomeUsuario()

objetoNomeUsuario.buscaNomeUsuario()
    .then(function(resposta){
        resposta.json()
            .then(function(dados){
                objetoCardNomeUsuario.buscaNomeUsuario(dados)
            })
    })

const objetoUserInfo = new userInfo()
const objetoCardUserInfo = new CardUserInfo()

objetoUserInfo.buscaUserInfo()
    .then(function(resposta){
        resposta.json()
            .then(function(dados){
                objetoCardUserInfo.buscaUserInfo(dados)
            })
    })

const objetoBarraStatus = new BarraStatus()
const objetoCardBarraStatus = new CardBarraStatus()

objetoBarraStatus.buscaBarraStatus()
    .then(function(resposta){
        resposta.json()
            .then(function(dados){
                objetoCardBarraStatus.buscaBarraStatus(dados)
            })
    })

const objetoTweets = new Tweets()
const objetoCardTweets = new CardTweets()

objetoTweets.buscaTweets()
    .then(function(resposta){
        resposta.json()
            .then(function(dados){
                objetoCardTweets.buscaTweets(dados)
            })
    })

const objetoSugestaoSeguidores = new SugestaoSeguidores()
const objetoCardSugestaoSeguidores = new CardSugestaoSeguidores()

objetoSugestaoSeguidores.buscaSugestaoSeguidores()
    .then(function(resposta){
        resposta.json()
            .then(function(dados){
                objetoCardSugestaoSeguidores.buscaSugestaoSeguidores(dados)
            })
    })