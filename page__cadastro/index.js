const botaoCriarConta = document.querySelector(".criar__conta") 
const botaoLogin = document.querySelector(".login") 
const containerPrimario = document.querySelector(".primario") 
const containerSecundario = document.querySelector(".secundario") 
const texto = document.querySelector(".texto") 
const crie = document.querySelector(".crie__ja")
const prf = document.querySelector(".prf")
const nome1 = document.querySelector(".nome1")
const nome2 = document.querySelector(".nome2")
const nome3 = document.querySelector(".nome3")
const nome = document.querySelector(".nome")

botaoCriarConta.addEventListener('click', ()=>{
   containerSecundario.classList.add("desloca__direita")
   containerPrimario.classList.add("desloca__esquerda")

   setTimeout(()=>{
      prf.style.display = "none"
      botaoCriarConta.innerHTML = "Faça parte do nosso time!"
      botaoLogin.innerHTML = "Criar conta"
      containerSecundario.style.transition = "1s"
      containerPrimario.style.margin = "0 1em"
      nome.style.display = "block"
      nome1.style.display = "block"
      nome2.style.display = "none"
      nome3.style.display = "none"

   },200)


   containerPrimario.classList.remove("desloca__direita")
   containerSecundario.classList.remove("desloca__esquerda")
   
   
})

botaoLogin.addEventListener("click", ()=>{
   containerSecundario.classList.remove("desloca__direita")
   containerPrimario.classList.remove("desloca__esquerda")

   containerPrimario.classList.add("desloca__direita")
   containerSecundario.classList.add("desloca__esquerda")
   
   setTimeout(()=>{
      prf.style.display = "block"
   botaoCriarConta.innerHTML = "Criar Conta"
   botaoLogin.innerHTML = "Fazer login"
   containerPrimario.style.margin = "0 -2em"
   containerPrimario.style.transition = "1s"
   nome.style.display = "none"
   nome1.style.display = "none"
   nome2.style.display = "block"
   nome3.style.display = "block"
   
   },200)

} )

crie.addEventListener('click', ()=>{
   containerSecundario.classList.remove("desloca__direita")
   containerPrimario.classList.remove("desloca__esquerda")
   containerPrimario.classList.remove("desloca__direita")
   containerSecundario.classList.remove("desloca__esquerda")

   setTimeout(()=>{
      containerSecundario.classList.add("desloca__direita")
      containerPrimario.classList.add("desloca__esquerda")
      prf.style.display = "none"
      botaoLogin.innerHTML = "Criar Conta"
      botaoCriarConta.innerHTML = "Faça parte do nosso time!"
      nome.style.display = "block"
      nome1.style.display = "block"
      nome2.style.display = "none"
      nome3.style.display = "none"
      containerPrimario.style.margin = "0 1em"
      },10)
})





/* containerPrimario.classList.add("desloca__esquerda")
    containerSecundario.classList.add("desloca__direita")
    texto.classList.add("desloca__direita")

    setTimeout(()=>{
        botaoLogin.innerHTML = "Criar Conta"
        botaoCriarConta.innerHTML = "Fazer Login"
       
    },2000) */