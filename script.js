// declarando variáveis gerais
var lua = window.document.querySelector("span#dark")
var sol = window.document.querySelector("span#ligth")
var body = window.document.querySelector("body")
var geral = window.document.querySelector("div.geral")

// declarando as variáveis de cada ícone
var home = window.document.querySelector("div.home")
var like = window.document.querySelector("div.like")
var pesquisa = window.document.querySelector("div.pesquisa")
var perfil = window.document.querySelector("div.perfil")


//Alternando para modo dark
function dark() {
  body.style.backgroundColor = "black" //mudando a cor do fundo para dark

  //trocando os ícones de lua pra sol e deixando ele branco
  lua.style.display = "none"
  sol.style.display = "block"
  sol.style.color = "white"

  geral.style.backgroundColor = "rgb(29, 29, 29)" //mudando a cor da div geral para dark

  //colocando a cor branca nos ícones 
  home.style.color = "rgb(195, 195, 195)"
  like.style.color = "rgb(195, 195, 195)"
  pesquisa.style.color = "rgb(195, 195, 195)"
  perfil.style.color = "rgb(195, 195, 195)"

  //colocando o background dos ícones para transparente
  home.style.backgroundColor = "transparent"
  like.style.backgroundColor = "transparent"
  pesquisa.style.backgroundColor = "transparent"
  perfil.style.backgroundColor = "transparent"

  //alternando as cores quando passamos o mouse por cima. Mouseonver para passar e Mouseout quando tiramos o mouse
  home.onmouseover = function () {
    this.style.backgroundColor = "rgb(115, 39, 197)"
  }

  home.onmouseout = function () {
    this.style.backgroundColor = "transparent"
  }

  like.onmouseover = function () {
    this.style.backgroundColor = "rgb(182, 82, 115)"
  }

  like.onmouseout = function () {
    this.style.backgroundColor = "transparent"
  }

  pesquisa.onmouseover = function () {
    this.style.backgroundColor = "rgb(197, 176, 39)"
  }

  pesquisa.onmouseout = function () {
    this.style.backgroundColor = "transparent"
  }

  perfil.onmouseover = function () {
    this.style.backgroundColor = "rgb(39, 139, 197)"
  }

  perfil.onmouseout = function () {
    this.style.backgroundColor = "transparent"
  }
}


//Alternando para modo ligth
function ligth() {
  body.style.backgroundColor = "rgb(218, 218, 255)" //mudando a cor do fundo para ligth

  //trocando os ícones de sol pra lua e deixando ele preto novamente
  lua.style.display = "block"
  sol.style.display = "none"
  lua.style.color = "black"

  //mudando a cor da div geral para branco
  geral.style.backgroundColor = "rgb(255, 255, 255)"

  //deixando os ícones do modo ligth para a cor preto novamente
  home.style.color = "black"
  like.style.color = "black"
  pesquisa.style.color = "black"
  perfil.style.color = "black"
  
  //colocando o background dos ícones para transparente
  home.style.backgroundColor = "transparent"
  like.style.backgroundColor = "transparente"
  pesquisa.style.backgroundColor = "transparent"
  perfil.style.backgroundColor = "transparent"

  //alternando as cores quando passamos o mouse por cima. Mouseonver para passar e Mouseout quando tiramos o mouse
  home.onmouseover = function () {
    this.style.backgroundColor = "rgb(189, 158, 225)"
    this.style.color = "rgb(102, 37, 181)"
  }

  home.onmouseout = function () {
    this.style.backgroundColor = "transparent"
    this.style.color = "black"
  }

  like.onmouseover = function () {
    this.style.backgroundColor = "rgb(225, 158, 223)"
    this.style.color = "rgb(155, 37, 181)"
  }

  like.onmouseout = function () {
    this.style.backgroundColor = "transparent"
    this.style.color = "black"
  }

  pesquisa.onmouseover = function () {
    this.style.backgroundColor = "rgb(219, 225, 158)"
    this.style.color = "rgb(181, 171, 37)"
  }

  pesquisa.onmouseout = function () {
    this.style.backgroundColor = "transparent"
    this.style.color = "black"
  }

  perfil.onmouseover = function () {
    this.style.backgroundColor = "rgb(158, 191, 225)"
    this.style.color = "rgb(37, 121, 181)"
  }

  perfil.onmouseout = function () {
    this.style.backgroundColor = "transparent"
    this.style.color = "black"
  }
}