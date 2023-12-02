const containerTitleCertificado =document.getElementById('containerCertificates__title');
const containerPaiCertificado = document.getElementById('containerCertificates');
const btnAcessCertificado = document.getElementById('containerCertificates__title__btnAcess');

let statusCertificado=false;
containerTitleCertificado.addEventListener('click', ()=>{
    
    if(window.screen.width < 481 ){
        if(statusCertificado == false){ 
            containerPaiCertificado.style.height = 'auto';
            statusCertificado = true;
            btnAcessCertificado.style.backgroundImage= "url(../src/assets/img/home/menos.png)";
        }else{
            containerPaiCertificado.style.height = '3.5rem';
            statusCertificado=false
            btnAcessCertificado.style.backgroundImage='url(../src/assets/img/home/sinal-de-adicao.png)';
        }
    }else{
        if(statusCertificado == false){ 
            containerPaiCertificado.style.height = 'auto';
            statusCertificado = true;
            btnAcessCertificado.style.backgroundImage= "url(../src/assets/img/home/menos.png)";
        }else{
            containerPaiCertificado.style.height = '5rem';
            statusCertificado=false
            btnAcessCertificado.style.backgroundImage='url(../src/assets/img/home/sinal-de-adicao.png)';
        }
    }
})
