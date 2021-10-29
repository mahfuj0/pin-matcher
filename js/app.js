function getPin (){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got digit ',pin)
        return getPin;
    }
    
}

    


function generatePin(){
   const pin= getPin()
    document.getElementById('display-pin').value= pin
}

document.getElementById("key-pad").addEventListener('click',function(event){
const number = event.target.innerText;
const calcInput =document.getElementById('typed-numbers');
if(isNaN(number)){
    if(number == 'C'){
        calcInput.value=''
    }
    
}
else{
   
    const priviousNumber = calcInput.value;
    const newNumber = priviousNumber + number
    calcInput.value = newNumber;
}
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successMessage =document.getElementById('notify-success');
    const faildError =document.getElementById('notify-faild');

    if(pin == typedNumbers){
      
        successMessage.style.display='block'
        faildError.style.display='none'

       
    }else{
       
        faildError.style.display='block'
        successMessage.style.display='none'

    }

}