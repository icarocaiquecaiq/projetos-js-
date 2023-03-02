const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    
  },
  {
    id: 10,
    title: "carne",
    category: "steak",
    price: 200.00,
    img: "./images/item-10.jpeg",
    desc: `carne cara e boa, venha hoje e aproveite a oferta .`
    
    
  }
];

const section = document.querySelector(".section-center")
const espaçoBtn = document.querySelector(".btn-container")
// adicionar manualmente os itens do objeto "menu"


// carregar itens 
window.addEventListener("DOMContentLoaded",function () {
  
  displayMenuItens(menu)
  displayMenubtns()


})



function displayMenuItens(menuItens) {
  
  
  let displayMenu = menuItens.map(function (item) {
    
    return `<article class="menu-item">
    <img src="${item.img}" class = "photo "alt="menu item">
    <div class="item-info"> 
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>  
      <p class=>${item.desc}</p>
    </div>
  </article>`}) 

  displayMenu = displayMenu.join(""); // juntar tudo em uma string gigante(sem isso, temos virgulas atrapalhando na view)
  section.innerHTML = displayMenu
  

}



function displayMenubtns() {
  const categories = menu.reduce((values,item)=>{
    if(!values.includes(item.category)){
      values.push(item.category)
      
    }
    return values  
  },["all"])
  let categoryBtn = categories.map((category)=>{
    return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
  })
  categoryBtn = categoryBtn.join("")
  espaçoBtn.innerHTML = categoryBtn
  const botoes = document.querySelectorAll(".filter-btn")
  
  

  //mostrar itens
  
botoes.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget.dataset);
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      // console.log(menuItem.category);
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displayMenuItens(menu)
    } else {
      displayMenuItens(menuCategory)
    }
  });
});
}
























/*const notas = [7, 8, 8, 7]
const sum = notas.reduce((p,c)=>{
  console.log(`previous: ${p}`);
  console.log(`current: ${c}`);
  return p+c
}, 0)

console.log(sum)

const people = [

  {
    nome : "dom perry",
    age: 35
  },
  {
    nome:"andrew wilksons",
    age: 47
  },
  {
    nome: "brian walker",
    age: 27
  }

]

//ver o mais velho entre eles

const oldest= people.reduce((p,c)=>{
  if (c.age > p){
    return c.age
  }
  return p

},0)

console.log(oldest)*/







