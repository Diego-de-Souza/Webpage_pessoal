const containerTitleEducation =document.getElementById('containerEducation__title');
const containerPaiEducation = document.getElementById('containerEducation');
const btnEducation = document.getElementById('containerEducation__title__btnAcess');
let statusEducation=false;
containerTitleEducation.addEventListener('click', ()=>{
    
    if(window.screen.width < 481 ){
        if(statusEducation == false){ 
            containerPaiEducation.style.height = 'auto';
            statusEducation = true;
            btnEducation.classList.remove('imgAdicaoMenuTitleBtnAcess');
            btnEducation.classList.add('imgSubtracaoMenuTitleBtnAcess');
            
        }else{
            containerPaiEducation.style.height = '3.5rem';
            statusEducation=false
            btnEducation.classList.remove('imgSubtracaoMenuTitleBtnAcess');
            btnEducation.classList.add('imgAdicaoMenuTitleBtnAcess');
        }
    }else{
        if(statusEducation == false){ 
            containerPaiEducation.style.height = 'auto';
            statusEducation = true;
            btnEducation.classList.remove('imgAdicaoMenuTitleBtnAcess');
            btnEducation.classList.add('imgSubtracaoMenuTitleBtnAcess');
        }else{
            containerPaiEducation.style.height = '5rem';
            statusEducation=false
            btnEducation.classList.remove('imgSubtracaoMenuTitleBtnAcess');
            btnEducation.classList.add('imgAdicaoMenuTitleBtnAcess');
            
        }
    }
})