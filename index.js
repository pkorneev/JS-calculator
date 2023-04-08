const keys = document.querySelectorAll(".key");
const display_input = document.querySelector(".input");
const display_output = document.querySelector(".output");

let input = "";
let wasEqual = false;
let num;
keys.forEach(key=>{
    key.addEventListener("click",()=>{
        switch(key.getAttribute('data-key')){
            case 'clear':
                display_input.innerHTML = '';
                display_output.innerHTML = '';
                wasEqual = false;
                input = "";
                break;
            case 'backspace':
                if(!wasEqual){
                    display_input.innerHTML = display_input.innerHTML.substr(0,display_input.innerHTML.length -1);
                }
                break;
            case '=':
                input = display_input.innerHTML;
                display_output.innerHTML = eval(input);
                wasEqual = true;
                break;
            case '+/-':
                if(!wasEqual){
                    num = Number(display_input.innerHTML);
                    num *= -1;
                    display_input.innerHTML = String(num);
                } else {
                    num = Number(display_output.innerHTML);
                    num *= -1;
                    display_output.innerHTML = String(num); 
                }
                num = 0;
                break;
            default:
                if(key.getAttribute('data-key') != ('backspace' || '+/-')){
                    if(!wasEqual){
                        display_input.innerHTML += key.getAttribute('data-key');
                    } else {
                        display_input.innerHTML = display_output.innerHTML;
                        display_input.innerHTML += key.getAttribute('data-key');
                        display_output.innerHTML = "";
                    }
                    wasEqual = false;
                }
        }
    })
})