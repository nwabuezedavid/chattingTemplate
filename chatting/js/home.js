const imgslide = document.querySelectorAll('.img-imgslide')

let inital_count = 0

function slide() {
    inital_count++
    imgslide.forEach((e,val) => {
        if (val == inital_count){
            e.classList.add("hidden")
            // console.log('hell',e)
            // inital_count++
        }
        else if(  inital_count == imgslide.length ){
            inital_count = 0
            e.classList.add("hidden")
  
        }
        else{
            
            // console.log('hell',e)
            e.classList.remove("hidden")
        }
        console.log(inital_count);
    });
}

setInterval(() => {
    slide()
    
}, 9000);

// let dates = getMilliseconds() 
// let dates = getMilliseconds() 
// let dates = getMilliseconds() 
let timeday = document.querySelector('.timeday')
let timehour = document.querySelector('.timehour')
let timemin = document.querySelector('.timemin')
let timesec = document.querySelector('.timesec')
let clicjj = document.querySelector('.toogle')
let closebtn = document.querySelector('.close')
let toogelclasscon = document.querySelector('.atmedia')
let timemillisec = document.querySelector('.timemillisec')
clicjj.addEventListener('click',()=>{
    toogelclasscon.classList.toggle('atmediashoe')
})
closebtn.addEventListener('click',()=>{
    toogelclasscon.classList.remove('atmediashoe')
})

function timeche() {
    const d = new Date()
let dates = d.getDate() 
let secon = d.getSeconds() 
let hocon = d.getHours() 
let daye = d.getDay() 
let min = d.getMinutes() 
let mills = d.getMilliseconds() 
console.log(daye,"wsw");
    timeday.innerHTML = dates   
    timehour.innerHTML =hocon 
    timemin.innerHTML = min
    timesec.innerHTML = secon
    timemillisec.innerHTML = mills
}
timeche()
setInterval(() => {
    timeche()
 
}, 100);
// let timesec = 