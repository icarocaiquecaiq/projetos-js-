const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const deadLine = document.querySelector(".deadline")
const giveaway = document.querySelector(".giveaway")
const time = document.querySelectorAll(".deadline-format h4")
const btnSpan = document.querySelector(".span-button")
const spanContent = document.querySelector(".span-time") 
console.log(btnSpan)




// timer 
const tempo = new Date()
const currentYear = tempo.getFullYear()
const currentMonth = tempo.getMonth()
const currentDay = tempo.getDay()
const currentDate = tempo.getDate()
const currentHour = tempo.getHours()
const currentMinutes = tempo.getMinutes()
const currentSeconds = tempo.getSeconds()

// set dinamic time
let futuredate = new Date(currentYear,currentMonth,currentDate,currentHour,currentMinutes,currentHour+30)



const year = futuredate.getFullYear()
const hour = futuredate.getHours()
const minutes = futuredate.getMinutes()
const date = futuredate.getDate()
console.log(date);

let month = futuredate.getMonth()  
month = months[month]
console.log(month)

let day = futuredate.getDay()
day = weekdays[day]
console.log(day);

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hour}:${minutes}am`



// difefença da data futura até a de hoje em milisegundos
const futureTime = futuredate.getTime()
console.log(futureTime);

// tranformar milisegundos 
function getRemainigTime() {
  const today = new Date().getTime()
  let t = futureTime-today
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // valores em ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  // calcular todos os valores
  let days = Math.floor(t/oneDay)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)

  // colocar valores na array
  const values = [days,hours,minutes,seconds]

  //colocar 0 qunado for acima de 10
  function put0 (item){
    if (item<10) {
      return `0${item}`
    }
     return item
  }

  time.forEach((item,index)=>{
    item.textContent = put0(values[index]) 
  })
  if (t<0) {
      deadLine.textContent = `acabou o timer, dá um refresh`
      spanContent.classList.add("open-span")
      btnSpan.addEventListener("click",function() {
      spanContent.classList.remove("open-span")
     
    })
   
  }
  
}
// mudar automaticamente (countdown)
let countdown = setInterval(()=>{
  getRemainigTime()
  
},1000)

getRemainigTime()







