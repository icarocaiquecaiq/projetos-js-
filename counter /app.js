var contador = 0

var contTela = document.querySelector('#value')
var botao = document.querySelectorAll('.btn')

botao.forEach(function (btn) { // parametro "btn" registra cada botao //

   
    btn.addEventListener("dblclick",function (e) {
        var estilo = (e.currentTarget.classList)

        if (estilo.contains('increase') && contador > 0) {
            
            contador = (contador - 2) * 2
            console.log(contador)
            console.log("teste")

            
    }contTela.textContent = contador})    


   btn.addEventListener('click',function (e) {
      
        var estilo = (e.currentTarget.classList)
        
        
             
           
        if (estilo.contains('decrease') ) {
            
            console.log(contador)
            contador --
            
        } else if (estilo.contains('increase')) {
            
            contador ++ 
            console.log(contador)
            
        } else if (estilo.contains("-100")) {
            contador = contador - 100
            
            
        } else if (estilo.contains("+100")){
        
            contador += 100 
        
        }else {
            
            contador = 0 
        }

        if (contador < 0) {

            contTela.style.color= "var(--clr-red-dark)"
            document.body.style.backgroundColor= ("rgb("+diferentRed(10,10)+",87,87)")
            console.log(diferentRed(10,10))
        }else if (contador > 0) {

            contTela.style.color="var(--clr-green-dark)"
            document.body.style.backgroundColor= ("rgb( "+diferentRed()+", 252, 132)")
            console.log(diferentRed(29+1))
        }else{

            contTela.style.color="var(--clr-primary-1)"
            document.body.style.backgroundColor= ("white")
        }

        contTela.textContent = contador

    })
         
})

function diferentRed(a,b) {
    var teste = a+b
    if (teste == 20){
        return Math.floor(Math.random()*(450-200)+200)
    }else {
        return Math.floor(Math.random()*(127-60)+60)}

}

console.log(diferentRed())