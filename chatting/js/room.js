// let postTotal = document.querySelectorAll('.postimage')
// let mainhomepagecon = document.querySelectorAll('.main-homepage-con-child-two')
let editPost = document.querySelectorAll('.edite-hide' )
let editbtn = document.querySelectorAll('.doticon' )
let deletoption = document.querySelectorAll('.btc-delete-t' )
let deletoptioncon = document.querySelector('.delesd' )
deletoption.forEach(element => {
    element.addEventListener('click',()=>{
        deletoptioncon.classList.add('delesdhide')
        console.log('hello');
    })
});
editPost.forEach((e,val) => {
editbtn.forEach((ex, vals)=> {
    ex.addEventListener('click',()=>{
   if (val == vals) {
       e.classList.toggle('edite-open')
    } 
})

});
});





// mainhomepagecon.forEach(element => {
//     postTotal.forEach(elementx => {

//     senmmainhomepagecon.forEach(elements => {
//         // console.log(element.children );
//         if(element.childElementCount <= 3 ){
//             if (elements.contains(element) ) {
                
//                 elements.classList.toggle('ccenter')
//             }
//             else{
//                 elements.classList.remove('ccenter')

//             }
// }

    

//         else if(element.childElementCount == 1){
    
//         chilsd = element.querySelector('postimage')
//    chilsd.classList.add('imgActive')
//    element.classList.add('whietd')
//    elements.classList.add('whietd')
    
//     }
   
//         // elements.classList.add('ccenter')
// // }
   

// });
// });
// });