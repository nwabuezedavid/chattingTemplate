const wide = document.querySelector('.sec-con')
const copywide = document.querySelectorAll('.slide-holder')
// const slidemain = document.querySelectorAll('.slide-holder-chlid-holder-chlid')
// const incrementing_status = document.querySelectorAll('.incre-num')
// const line_dictate = document.querySelectorAll('.line-count')
let widerd = wide.clientWidth
let initalcount = -1
let limite = 0
let num  = 10 
let connum = 0
let totaloverco = []


let overcounts = 0
function allcon() {
    


copywide.forEach((cd, val) => {
if (val == overcounts) {
    cd.classList.add('cont-active')

    namedn = cd.querySelector('.slide-holder-chlid-holder')
    // namedlinecount = cd.querySelector('.count-nount-s')
    // namedincrement = cd.querySelector('.increment')
    // maoin_increment =  namedincrement.querySelectorAll('.incre-num')
    // maoin_line =  namedlinecount.querySelectorAll('.line-count')
    
    setInterval(() => {
        incre()
        
        
    }, 1000);
    
    
    
    function incre() {
        
        namedn = cd.querySelector('.slide-holder-chlid-holder')
        namedincrement = cd.querySelector('.increment')
        maoin_increment =  namedincrement.querySelectorAll('.incre-num')
        
        
        maoin_increment.forEach((e,vd) => {
            namedn = cd.querySelector('.slide-holder-chlid-holder')
            maoin_name =  namedn.querySelectorAll('.slide-holder-chlid-holder-chlid')
            // num--
            if (num == 0 ) {
                
                
                if ( maoin_name.length == initalcount +1) {
                    e.innerHTML = 0
                    console.log('ini', overcounts)
                   num = 0
                   overcounts++
                   
                   slidiLine()
                   totaloverco.push(overcounts)
                if (overcounts == copywide.length) {
                  
                    overcounts = 0
                    // num  = 10 
                    // slidiLine()
                    // initalcount ++
                   }
                } else{
                    e.innerHTML = num
                    num = 10
                    initalcount ++
                    slidiLine()
                }
        }else{

            e.innerHTML = num
            num--
        }
        
        
    
        });
    }





function slidiLine() {
    initalcount ++
    namedn = cd.querySelector('.slide-holder-chlid-holder')
    namedlinecount = cd.querySelector('.count-nount-s')
    maoin_line =  namedlinecount.querySelectorAll('.line-count')
    maoin_line[0].classList.add('active-line')
    
    console.log(initalcount,'imge');
    maoin_line.forEach((e,val) => {
      
                slideImg()
           
    if (val == initalcount ) {
            e.classList.add('active-line')
            
        }
        else if(initalcount >= maoin_line.length ){          
                         initalcount = 0
                        
                        e.classList.remove('active-line')
            
                    }
         else {
            e.classList.remove('active-line')

        }
    });

}

    // initalcount++
 function slideImg() {

     namedn = cd.querySelector('.slide-holder-chlid-holder')
     maoin_name =  namedn.querySelectorAll('.slide-holder-chlid-holder-chlid')

     maoin_name[0].classList.add('active-comein')

     console.log('lini',initalcount);
     maoin_name.forEach((e,val) => {         
         if (val == initalcount ) {
             e.classList.add('active-comein')          
         }else if(initalcount >= maoin_name.length ){          
             initalcount = 0
            
            e.classList.remove('active-line')

        }
         else {
    
                 e.classList.remove('active-comein')

             }
     });

 }

}
else{
    cd.classList.remove('cont-active')
}



});
}


allcon()

totaloverco.forEach(()=>{
    
})





// slidxin()



