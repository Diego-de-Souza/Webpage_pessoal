const containerTitleAbout =document.getElementById('containerAbout__title');
const containerPaiAbout = document.getElementById('containerAbout');
const classeImagem = document.getElementsByClassName('abracadabra');
const btnAcess = document.getElementById('containerAbout__title__btnAcess');
let statusAbout=false;
containerTitleAbout.addEventListener('click', ()=>{
    
    
    console.log(classeImagem.length)
    if(window.screen.width < 481 ){
        if(statusAbout == false){ 
            containerPaiAbout.style.height = 'auto';
            statusAbout = true;
            btnAcess.style.backgroundImage= "url(menos.png)";
            for(let x=0;x<classeImagem.length;x++){
                classeImagem[x].style.display='block';
            }
            
        }else{
            containerPaiAbout.style.height = '3.5rem';
            statusAbout=false
            btnAcess.style.backgroundImage='url(sinal-de-adicao.png)';
            for(let x=0;x<classeImagem.length;x++){
                classeImagem[x].style.display='none'
            }
            
        }
    }else{
        if(statusAbout == false){ 
            containerPaiAbout.style.height = 'auto';
            statusAbout = true;
            btnAcess.style.backgroundImage= "url(menos.png)";
            for(let x=0;x<classeImagem.length;x++){
                classeImagem[x].style.display='block';
            }
            
        }else{
            containerPaiAbout.style.height = '5rem';
            statusAbout=false
            btnAcess.style.backgroundImage='url(sinal-de-adicao.png)';
            for(let x=0;x<classeImagem.length;x++){
                classeImagem[x].style.display='none'
            }
            
        }
    }

})
