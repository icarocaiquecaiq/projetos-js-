//using selectors inside the element
// traversing the dom


const questions = document.querySelectorAll(".question")

// primeiro jeito de fazer

questions.forEach((question)=>{
    
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click",function () {
        
        question.classList.toggle("show-text")
        
        questions.forEach((item)=>{
            
            if (item !== question) {
                console.log(question,item)
                
                item.classList.remove("show-text")
                
            } 

        })
        


    })   
})





// segundo jeito de fazer

/* 
const questions = document.querySelectorAll(".question-btn")

    questions.forEach(function (btn) {
       
        btn.addEventListener("click",function (e) {
            const mostrar = (e.currentTarget.parentElement.parentElement)
            
            mostrar.classList.toggle("btn-ingre")
            
            
        })
        
    })     */

    



























































