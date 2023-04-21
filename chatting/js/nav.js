const btntogl = document.querySelector('.togle')
const btntogle_con = document.querySelector('.fixed-more')
const barbtn = document.querySelector('.cls')
const barbtncon = document.querySelector('.nav')
const barclic = document.querySelector('.barclic')
const moreclose = document.querySelector('.moreclose')


    barclic.addEventListener('click',()=>{
        barbtncon.classList.add('navactive')
        barclic.style.display='none'
    })
barbtn.addEventListener('click',()=>{
    barbtncon.classList.remove('navactive')
    barclic.style.display='flex'

})
moreclose.addEventListener('click',()=>{
    btntogle_con.classList.remove('fixed-more-active')
})
btntogl.addEventListener('click',()=>{
    btntogle_con.classList.toggle('fixed-more-active')
})