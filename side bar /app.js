// assinar botão 

const abriFecha = document.querySelector(".sidebar-toggle")
const fechar = document.querySelector(".close-btn")
const links = document.querySelector(".sidebar")


console.log(abriFecha)
console.log(fechar)
console.log(links)

abriFecha.addEventListener("click",()=>{

    console.log(links.classList.toggle("show-sidebar"))
    

})

fechar.addEventListener("click",()=>{

    console.log(links.classList.remove("show-sidebar"))


})