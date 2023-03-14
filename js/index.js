
let resultinput = document.getElementById('result');
let equalBtn =document.getElementById('equal');

function calcNum(gam)
{
    resultinput.value  += gam;
}
function reset(){
    resultinput.value= "";
}
equalBtn.addEventListener('click',function(){
  
    let operate = resultinput.value; 
    if(operate == 0){
        resultinput.value = "0"
    }else {
        resultinput.value = eval(operate);
    }
})

document.addEventListener('keydown',function(e){
    if(e.code == 'Equal' || e.code == 'NumpadEnter'){
        let operate = resultinput.value; 
        if(operate == 0){
            resultinput.value = "0"
        }else {
            resultinput.value = eval(operate);
        }
    }else if (e.code == 'Backspace'){
        reset()
    }else if (e.code == 'Numpad7'){
        calcNum(7)
    }else if (e.code == 'Numpad8'){
        calcNum(8)
    }else if (e.code == 'Numpad9'){
        calcNum(9)
    }
    else if (e.code == 'Numpad6'){
        calcNum(6)
    }
    else if (e.code == 'Numpad5'){
        calcNum(5)
    }
    else if (e.code == 'Numpad4'){
        calcNum(4)
    }
    else if (e.code == 'Numpad3'){
        calcNum(3)
    }
    else if (e.code == 'Numpad2'){
        calcNum(2)
    }
    else if (e.code == 'Numpad1'){
        calcNum(1)
    }
    else if (e.code == 'NumpadAdd'){
        calcNum('+')
    }
    else if (e.code == 'NumpadSubtract'){
        calcNum('-')
    }
    else if (e.code == 'NumpadDivide'){
        calcNum('/')
    }
    else if (e.code == 'NumpadMultiply'){
        calcNum('*')
    }
})
 document.addEventListener('keydown',function(e){
     console.log(e.code);
   
})
