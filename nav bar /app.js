// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// preciso assisinar o evento de click para realizar a ação de; height: 0 no css, overflow : hidden e transition: var(--transition)


// assinar o evento de click

const nav = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

// acionar e desativar classe do css  

nav.addEventListener("click",()=>{
   
   console.log(links.classList.toggle("show-links"))

})
