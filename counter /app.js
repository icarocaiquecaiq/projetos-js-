var contador = 0

var contTela = document.querySelector('#value')
var botao = document.querySelectorAll('.btn')

botao.forEach(function (btn) { // parametro "btn" registra cada botao //
 
    btn.addEventListener('click',function (e) {
      
        const estilo = (e.currentTarget.classList)


           
        if (estilo.contains('decrease') ) {
            
            console.log(contador)
            contador --
            
        } else if (estilo.contains('increase')) {
            
            contador ++ 
            console.log(contador)
            
        } else {
            
            contador = 0 
        }

        if (contador < 0) {

            contTela.style.color= "var(--clr-red-dark)"

        }else if (contador > 0) {

            contTela.style.color="var(--clr-green-dark)"

        }else{

            contTela.style.color="var(--clr-primary-1)"
        }

        contTela.textContent=contador

    })
        
})



