const nextBtn = document.querySelector(".nextBtn")
const prevtBtn = document.querySelector(".prevBtn")
const slides = document.querySelectorAll(".slide")

console.log(nextBtn,prevtBtn,slides);

slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
})

let counter = 0

nextBtn.addEventListener("click",function(){
    counter ++ 
    carousel()
    
    
})

prevtBtn.addEventListener("click",function(){
    counter --
    carousel()
})

function carousel(){
   /*  if(counter === slides.length){
        counter = 0
    }
    if (counter < 0   ) {
        counter = slides.length  -1
    } */
    if (counter < slides.length -1) {
        nextBtn.style.display = 'block'
    } 
    else{
        nextBtn.style.display = 'none'
    }
    if (counter > 0) {
        prevtBtn.style.display = 'block'
    } 
    else{
        prevtBtn.style.display = 'none'
    }
    
    slides.forEach((slide)=>{
        slide.style.transform =`translateX(-${counter * 100}%)`
    })
}


