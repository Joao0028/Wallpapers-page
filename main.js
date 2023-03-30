const muda = document.querySelector(".muda__cor");
const headre = document.querySelector(".header");
const desk = document.querySelectorAll(".info__desktop");
const gratis = document.querySelector(".gratuita");
const linke = document.querySelector(".linkes");



muda.addEventListener("click", ()=>{
    
    if(linke.style.color === "white"){
        linke.style.color = "#f6eddc"
        document.body.style.background = "#1348ae"
        headre.style.background = "#00389b"
        for(let i = 0; i < desk.length; i++){
            desk[i].style.background = "#2658c1"
        }
    }else{
        linke.style.color = "white"
        document.body.style.background = "#1D232A"
        headre.style.background = "#15191C"
        for(let i = 0; i < desk.length; i++){
            desk[i].style.background = "#2C343A"
        }
    }
})
