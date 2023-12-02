const containerTitleEducation =document.getElementById('containerEducation__title');
const containerPaiEducation = document.getElementById('containerEducation');
const btnEducation = document.getElementById('containerEducation__title__btnAcess');
let statusEducation=false;
containerTitleEducation.addEventListener('click', ()=>{
    
    if(window.screen.width < 481 ){
        if(statusEducation == false){ 
            containerPaiEducation.style.height = 'auto';
            statusEducation = true;
            btnEducation.style.backgroundImage= "url(../src/assets/img/home/menos.png)";
            
        }else{
            containerPaiEducation.style.height = '3.5rem';
            statusEducation=false
            btnEducation.style.backgroundImage='url(../src/assets/img/home/sinal-de-adicao.png)';
            
        }
    }else{
        if(statusEducation == false){ 
            containerPaiEducation.style.height = 'auto';
            statusEducation = true;
            btnEducation.style.backgroundImage= "url(../src/assets/img/home/menos.png)";
            
        }else{
            containerPaiEducation.style.height = '5rem';
            statusEducation=false
            btnEducation.style.backgroundImage='url(../src/assets/img/home/sinal-de-adicao.png)';
            
        }
    }
})