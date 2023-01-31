const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var botao = document.getElementById("btn")
var classe = document.querySelector(".color")


botao.addEventListener('click', function get() {
   var hexcolor = "#" 
   for (let teste = 0; teste < 6; teste++) {
       
       hexcolor += hex[getrandom()]
       console.log(hexcolor)
    
   }

   document.body.style.backgroundColor = hexcolor
   classe.textContent = hexcolor
   
    
})


function getrandom() {
   return Math.floor(Math.random() * 14) 
   
}