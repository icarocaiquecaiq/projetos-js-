// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const botao = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")
const preloader = document.querySelector(".preloader")


pauseAndPlay()

window.addEventListener("load",()=>{
   
    preloader.classList.add("hide-preloader")
    
})




function pauseAndPlay() {

    botao.addEventListener("click",()=>{
        
        if (!botao.classList.contains("slide")){
            
            botao.classList.add("slide")
            video.pause()
            
        } else{
            
            botao.classList.remove("slide")
            video.play()    
        }
        
    })
    
}