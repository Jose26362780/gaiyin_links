function toggleMode() {
  const html =  document.documentElement


  /* essa é uma forma de deixar a função com a nossa
  logica 


  if(html.classList.contains('light')){
    html.classList.remove('light')
  }else{
    html.classList.add('light')

  }
  mas o classlist.toggle ja verifica nosso codigo com 
  a mesma logica 
  */ 

  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/logo_black.jpg')
  }else{
    img.setAttribute('src', './assets/logo_ligth.jpg')
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", " logo escuro gaiyin")
  } else {
    img.setAttribute("alt", "foto de jose sorrindo")
  }
}



