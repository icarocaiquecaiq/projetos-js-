const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const botao = document.getElementById("btn") 
const cor = document.querySelector(".color") // ponto = classe
 
botao.addEventListener('click', function change () { 
    
    
    const CorAle = pegarnumale() 
    console.log(CorAle)
    document.body.style.backgroundColor= colors[CorAle]
    cor.textContent = colors[CorAle]

   // agora, eu quero escolher um número aleatório para mudar a cor //
   // para isso, é necessário uma função que gera números aleatórios//
   
   
   
})


function pegarnumale() {
    return Math.floor(Math.random() * colors.length)   

}