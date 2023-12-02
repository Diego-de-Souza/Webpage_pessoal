const containerTitleContato =document.getElementById('containerContact__title');
const containerPaiContato = document.getElementById('containerContact');
const btnAcessContato = document.getElementById('containerContact__title__btnAcess');

let statusContato=false;
containerTitleContato.addEventListener('click', ()=>{
    
  if(window.screen.width < 481 ){
    if(statusContato == false){ 
      containerPaiContato.style.height = 'auto';
      statusContato = true;
      btnAcessContato.style.backgroundImage= "url(../assets/img/home/menos.png)";
  }else{
      containerPaiContato.style.height = '3.5rem';
      statusContato=false
      btnAcessContato.style.backgroundImage='url(../assets/img/home/sinal-de-adicao.png)';
  }
  }else{
    if(statusContato == false){ 
        containerPaiContato.style.height = 'auto';
        statusContato = true;
        btnAcessContato.style.backgroundImage= "url(../assets/img/home/menos.png)";
    }else{
        containerPaiContato.style.height = '5rem';
        statusContato=false
        btnAcessContato.style.backgroundImage='url(../assets/img/home/sinal-de-adicao.png)';
    }
  }
})

//parte do formulário

const btnSubmit = document.getElementById('BtnSubmit');
const nomeUsuario = document.getElementById('username');
const emailUsuario = document.getElementById('email_User');
const telefoneUsuario  = document.getElementById('telefone')
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagemUsuario')

btnSubmit.addEventListener('click', Event=>{
    Event.preventDefault();
    const data = { username: `${nomeUsuario.value}`,
                   email: `${emailUsuario}`,
                   telefone: `${telefoneUsuario}`,
                   assunto: `${assunto}`,
                   mensagem: `${mensagem}` };
    fetch("https://api.staticforms.xyz/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accessKey": "71a633c5-26c7-4e43-b9a7-459217549bd7"
            },
            body: JSON.stringify(data),
        }
    )
        .then((response) => response.json())
        .then((data) => {
        console.log("Success:", data);
        })
        .catch((error) => {
        console.error("Error:", error);
        });
})
/*
const data = { username: "Victor Jordan" };

fetch("https://backefront.com.br/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
    }
)
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
*/