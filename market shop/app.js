// ****** SELECT ITEMS **********
const alertt = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const input = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const cleanBtn = document.querySelector(".clear-btn")


// edit option
let editElement
let editFlag = false
let editID = ""

// ****** EVENT LISTENERS **********
//submit form 
form.addEventListener("submit",addItem)

cleanBtn.addEventListener("click",cleanItens)

// load items 
window.addEventListener("DOMContentLoaded",setupItems)
// ****** FUNCTIONS **********

function addItem(e){
e.preventDefault()
// pegar o input do usuário
const value = grocery.value
// id única
const id = new Date().getTime().toString()
// tem ou não os valores
if (value && !editFlag) { // quando o valor for falso e a let: editFlag for falsa queremos fazer algo
    
    createListItem(id,value)
    // disparar alerta 
    displayAlert("item adicionado à lista","success")
    //mostrar container
    container.classList.add("show-container")
    //enviar para o localStorage
    addToLocalStorage(id,value)
    //tranformar para normal
    setBackToNormal()
}else if (value && editFlag){
    editElement.innerHTML = value
    displayAlert("item editado","success")
    // edit localStorage
    editLocalStorage(editID,value)
    setBackToNormal()
}
else{
    console.log("empty value");
    displayAlert("preenchimiento vazio","danger")
}

}

// remover tudo

function cleanItens(){
    const articles = document.querySelectorAll("article")
   if (articles.length  > 0) {
        articles.forEach((article)=>{
        list.removeChild(article)
    })
}
    container.classList.remove("show-container")
    displayAlert("lista vazia","danger")
     localStorage.removeItem("list") 
    setBackToNormal()
}
// função limpar item especifico 
    function deleteItem(e){
        const espeItem = e.currentTarget.parentElement.parentElement
        const id = espeItem.dataset.id
        list.removeChild(espeItem)
        if (list.children.length === 0) {
            container.classList.remove("show-container")            
        }
        displayAlert("item removido","danger") 
        setBackToNormal()  
        removeFromLocalStorage(id)     
    }
// função editar item especifico
    function editItem(e){
        const espeItem = e.currentTarget.parentElement.parentElement
        // set element item
        editElement = e.currentTarget.parentElement.previousElementSibling
        //set form 
        grocery.value = editElement.innerHTML
        editFlag = true
        editID = espeItem.dataset.id
        submitBtn.textContent = "edit"
    }
//display alert e remover em segundos 
function displayAlert(mensagem,tipo){
    alertt.classList.add(`alert-${tipo}`)
    alertt.textContent = mensagem
    const desaparecer = setTimeout(() => {
        alertt.classList.remove(`alert-${tipo}`)
        alertt.textContent = ""
    }, 1500) 
}
//limpar o input
function setBackToNormal(){
    grocery.value = ""
    editFlag = false
    editID = ''
    submitBtn.textContent = "enviar"
}    

// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
    console.log("enviado para o localstorage")
    //pega os parametros
    const grocery = {id:id,value:value}
    console.log(grocery);
    const items = getLocalStorage()
    console.log(items)
    items.push(grocery)
    localStorage.setItem("list",JSON.stringify(items))
}

function removeFromLocalStorage(id){
    
   let items = getLocalStorage()
    items = items.filter(function(item){
        if (item.id !== id) {
            return item
        }
    })
    
    localStorage.setItem("list",JSON.stringify(items))
}

function  editLocalStorage(id,value){
   let items = getLocalStorage()
   console.log(items)
   items = items.map((item)=>{
        if(item.id == id && item.value !== value){
            item.value = value
        }
        return item 
    }) 
    localStorage.setItem("list",JSON.stringify(items))
}

function getLocalStorage(){
    return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : []
}
//localStorage API
//setItem
//getItem
//removeItem
//save as strings    
/* localStorage.setItem("orange",JSON.stringify([grocery.value]))
const oranges = JSON.parse(localStorage.getItem("orange"))
console.log(oranges);
localStorage.removeItem("orange") */
// ****** SETUP ITEMS **********

function setupItems(){
    let items = getLocalStorage()
    if(items.length > 0){
        items.forEach((item)=>{
            createListItem(item.id,item.value)
        })
       container.classList.add("show-container") 
    }
}

function createListItem(id,value){
    const element = document.createElement("article")
    // adicionar classe
    element.classList.add("grocery-item")
    // adicionar id
    const attr = document.createAttribute("data-id")
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`
    const excluBtn = element.querySelector(".delete-btn")
    const editBtn = element.querySelector(".edit-btn")
    excluBtn.addEventListener("click",deleteItem)
    editBtn.addEventListener("click",editItem)
  
    // apenchild
    list.appendChild(element)
}
