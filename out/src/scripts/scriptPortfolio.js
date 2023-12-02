//declaração da váriavel de controle dos botões de controle
const btnMenu = document.getElementsByClassName('btnMenu');
const containerWeb = document.getElementById('containerPortfolio__works__containerweb');
const containerBanco = document.getElementById('containerPortfolio__works__containerBancoDados');
const containerSoftware = document.getElementById('containerPortfolio__works__containerSoftware');
const containerMobile = document.getElementById('containerPortfolio__works__containerMobile');

/*aréa de evento dos botões do portfolio */
btnMenu[0].addEventListener('click',()=>{
    containerWeb.classList.add('containerON');
    containerWeb.classList.remove('containerOFF');
    containerBanco.classList.add('containerOFF');
    containerSoftware.classList.add('containerOFF');
    containerMobile.classList.add('containerOFF');
})

btnMenu[1].addEventListener("click",()=>{
    containerBanco.classList.add('containerON');
    containerBanco.classList.remove('containerOFF');
    containerWeb.classList.add('containerOFF');
    containerSoftware.classList.add('containerOFF');
    containerMobile.classList.add('containerOFF');
})

btnMenu[2].addEventListener("click", ()=>{
    containerSoftware.classList.add('containerON');
    containerSoftware.classList.remove('containerOFF')
    containerWeb.classList.add('containerOFF');
    containerBanco.classList.add('containerOFF');
    containerMobile.classList.add('containerOFF');
})

btnMenu[3].addEventListener('click',()=>{
    containerMobile.classList.add('containerON');
    containerMobile.classList.remove('containerOFF');
    containerWeb.classList.add('containerOFF');
    containerBanco.classList.add('containerOFF');
    containerSoftware.classList.add('containerOFF');
})

const containerTitlePortfolio =document.getElementById('containerPortfolio__title');
const containerPaiPortfolio = document.getElementById('containerPortfolio');
const btnAcessPortfolio = document.getElementById('containerPortfolio__title__btnAcess');
let statusPortfolio=false;
containerTitlePortfolio.addEventListener('click', ()=>{
    
    if(window.screen.width < 481 ){
        if(statusPortfolio == false){ 
            containerPaiPortfolio.style.height = 'auto';
            statusPortfolio = true;
            btnAcessPortfolio.style.backgroundImage= "url(../src/assets/img/home/menos.png)";        
        }else{
            containerPaiPortfolio.style.height = '3.5rem';
            statusPortfolio=false
            btnAcessPortfolio.style.backgroundImage='url(../src/assets/img/home/sinal-de-adicao.png)';
        }
    }else{
        if(statusPortfolio == false){ 
            containerPaiPortfolio.style.height = 'auto';
            statusPortfolio = true;
            btnAcessPortfolio.style.backgroundImage= "url(../src/assets/img/home/menos.png)";        
        }else{
            containerPaiPortfolio.style.height = '5rem';
            statusPortfolio=false
            btnAcessPortfolio.style.backgroundImage='url(../src/assets/img/home/sinal-de-adicao.png)';
        }
    }
})
