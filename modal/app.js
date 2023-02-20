// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const mostrar = document.querySelector(".modal-btn")
const aparecer = document.querySelector(".modal-overlay")
const desaparecer = document.querySelector(".close-btn")

console.log(mostrar)
console.log(aparecer)
console.log(desaparecer)

mostrar.addEventListener("click",()=>{
    console.log(aparecer.classList.add("open-modal","modal-overlay"))

    

})

desaparecer.addEventListener("click",()=>{
    console.log(aparecer.classList.remove("open-modal"))
    

})


