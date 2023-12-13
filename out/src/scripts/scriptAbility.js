const containerTitleAbility =document.getElementById('containerAbility__title');
const containerPaiAbility = document.getElementById('containerAbility');
const btnAbility = document.getElementById('containerAbility__title__btnAcess');
let statusAbility=false;
containerTitleAbility.addEventListener('click', ()=>{
    
    if(window.screen.width < 481 ){
        if(statusAbility == false){ 
            containerPaiAbility.style.height = 'auto';
            statusAbility = true;
            btnAbility.style.backgroundImage= "url(../assets/img/home/menos.png)";
            
        }else{
            containerPaiAbility.style.height = '3.5rem';
            statusAbility=false
            btnAbility.style.backgroundImage='url(../assets/img/home/sinal-de-adicao.png)';
            
        }
    }else{
        if(statusAbility == false){ 
            containerPaiAbility.style.height = 'auto';
            statusAbility = true;
            btnAbility.style.backgroundImage= "url(../assets/img/home/menos.png)";
            
        }else{
            containerPaiAbility.style.height = '5rem';
            statusAbility=false
            btnAbility.style.backgroundImage='url(../assets/img/home/sinal-de-adicao.png)';
            
        }
    }
})
