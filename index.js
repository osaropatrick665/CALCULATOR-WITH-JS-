'use strict';
const display = document.getElementById("display-screen");
 const buttonLength = document.getElementsByClassName("new-btn").length;
function buttonClick( key){
    switch(key) {
        case "=":
            if(display.value.trim() !== "") {
                 display.value = eval(display.value);
            }
           
            break;
            default : appendValue(key);
    }
}

function buttonAnimation (value){
    const activeClass = document.querySelectorAll(".new-btn");
        const activeLength = document.querySelectorAll(".new-btn").length ;
        for(let i = 0; i < activeLength; i++){
            if(activeClass[i].innerHTML === value){
                activeClass[i].classList.add("animation-js");
                setTimeout( function (){
                    activeClass[i].classList.remove("animation-js")
                }, 100)
            } else if(activeClass[i].innerHTML === "=" && value === "Enter"){
                activeClass[i].classList.add("animation-js");
                setTimeout( function (){
                    activeClass[i].classList.remove("animation-js")
                },100)
            } else{
                console.log(value);
            }
            }

        }
    
    function buttonAnimation2 (value){
        const activeClass2 = document.querySelectorAll(".second-btn")
        const activeLength2 = document.querySelectorAll(".second-btn").length;
        for(let i = 0; i < activeLength2; i++){
            if(activeClass2[i].innerHTML === value){
                activeClass2[i].classList.add("animation-js");
                setTimeout(function (){
                    activeClass2[i].classList.remove("animation-js")
                }, 100)
            } 
            
    }
}
function buttonAnimation3(value){
    const buttonBtn1 = document.querySelector(".btn-1")
    if(value === "c") {
        buttonBtn1.classList.add("animation-js");
        setTimeout(function (){
            buttonBtn1.classList.remove("animation-js")
        }, 100)
    }
     
    
}
function buttonAnimation4(value){
    const buttonBtn2 = document.querySelector(".btn-2")
     if(value === "Backspace")
        {
            buttonBtn2.classList.add("animation-js")
            setTimeout(function (){
            buttonBtn2.classList.remove("animation-js")
        }, 100)
        }
}



        

    for(let i = 0; i < buttonLength; i++){
document.getElementsByClassName("new-btn")[i].addEventListener("click", function () {
         const buttonInnerHTML = this.innerHTML;
        buttonClick(buttonInnerHTML)
       buttonAnimation(buttonInnerHTML);
} )
    
    }

function appendValue(input){
    display.value += input 
    
}

function operatorValue(input){
    const valueNumber = ["+","-","/","*"];
    const valueDisplay = display.value.slice(-1);
    if (valueNumber.includes(input) && valueNumber.includes(valueDisplay)){
        console.log("blocked double operator, input ")
    }else{
        appendValue(input)
    }
}

const buttonLength2 = document.getElementsByClassName("second-btn").length;
for(let i = 0; i < buttonLength2 ; i++){
    document.getElementsByClassName("second-btn")[i].addEventListener("click", function (){
        const buttonInnerHtml2 = this.innerHTML;
         operatorValue(buttonInnerHtml2);
         buttonAnimation2(buttonInnerHtml2);
         
         



    })
 }

document.querySelector(".btn-1").addEventListener("click", function (){ 
    display.value = "";
    document.querySelector(".btn-1").classList.add("animation-js");
    setTimeout(function (){
        document.querySelector(".btn-1").classList.remove("animation-js");
     }, 100)
        
             
 })
document.querySelector(".btn-2").addEventListener("click", function (){
     display.value = display.value.slice(0, -1);
     document.querySelector(".btn-2").classList.add("animation-js");
     setTimeout(function (){
        document.querySelector(".btn-2").classList.remove("animation-js");
     }, 100)

 })


 

 function keySwitch(key) {
    switch(key){
     case "0":
    appendValue(key)
    break ;
     case "1":
      appendValue(key);
     break;
    case "2":
     appendValue(key)
     break;
     case "3" :
    appendValue(key);
        break;
     case "4" :
      appendValue(key);
         break;
          case "5" :
     appendValue(key);
     break;
     case "6" :
    appendValue(key);
       break;
     case "7" :
     appendValue(key);
        break;
         case "8" :
     appendValue(key);
     break;
     case "9" :
     appendValue(key);
      break;
     case "." :
      appendValue(key);
       break;
      case "Enter" :
        if(display.value.trim() !== ""){
            display.value = eval(display.value);
        }
    break ; 
    case "+":
     appendValue(key);
     break;
      case "-" :
      appendValue(key);
     break; 
    case "/" :
      appendValue(key);
     break;
      case "*" :
       appendValue(key);
        break;
      case "c" :
     display.value = "";
       break;
     case "Backspace" :
     display.value = display.value.slice(0, -1);
      break;

       default : console.log(key)
                                
                            
    }
 }
 
    
/*-----keyboard function ----*/

 
document.addEventListener("keydown", function (event){
       keySwitch(event.key);
       buttonAnimation2(event.key);
       buttonAnimation(event.key)
       buttonAnimation3(event.key)
       buttonAnimation4(event.key)
     
   
    
        
})
 
