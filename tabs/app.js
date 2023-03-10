const buttons = document.querySelectorAll(".tab-btn")
const texts = document.querySelectorAll(".content")
const articles = document.querySelector(".about") 

articles.addEventListener("click",(e)=>{
    // pegando o valor a id de cada
   const id = e.target.dataset.id
    if(id){
        // removendo o atributo de todos e adiciconando somente naquele que foi clicado
        buttons.forEach((btn)=>{
            btn.classList.remove("active")
            e.target.classList.add("active")

        })
        // removendo (escondendo) o texto de todos os elementos
        texts.forEach((text) => {
            text.classList.remove("active")
        })
        // adicionando a classe naquele que foi clicado
        const actual = document.getElementById(id)
        actual.classList.add("active")
    }
})