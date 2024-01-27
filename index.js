let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        console.log('Button Text is ',buttontext);
        if(buttontext=='X'){
            buttontext='*';
            screenvalue +=buttontext;
            screen.value = screenvalue;

        }
        else if (buttontext=='C'){
            screenvalue = " ";
            screen.value = screenvalue;

        }
        else if (buttontext == '='){
            screen.value=eval(screenvalue);
        }
        else{
            screenvalue +=buttontext;
            screen.value = screenvalue;


        }
    })
}
