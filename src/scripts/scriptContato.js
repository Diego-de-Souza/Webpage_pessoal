
const containerTitleContato =document.getElementById('containerContact__title');
const containerPaiContato = document.getElementById('containerContact');
const btnAcessContato = document.getElementById('containerContact__title__btnAcess');


let statusContato=false;
containerTitleContato.addEventListener('click', ()=>{
    
  if(window.screen.width < 481 ){
    if(statusContato == false){ 
      containerPaiContato.style.height = 'auto';
      statusContato = true;
      btnAcessContato.classList.remove('imgAdicaoMenuTitleBtnAcess');
      btnAcessContato.classList.add('imgSubtracaoMenuTitleBtnAcess');
  }else{
      containerPaiContato.style.height = '3.5rem';
      statusContato=false
      btnAcessContato.classList.remove('imgSubtracaoMenuTitleBtnAcess');
      btnAcessContato.classList.add('imgAdicaoMenuTitleBtnAcess');
  }
  }else{
    if(statusContato == false){ 
        containerPaiContato.style.height = 'auto';
        statusContato = true;
        btnAcessContato.classList.remove('imgAdicaoMenuTitleBtnAcess');
        btnAcessContato.classList.add('imgSubtracaoMenuTitleBtnAcess');
    }else{
        containerPaiContato.style.height = '5rem';
        statusContato=false
        btnAcessContato.classList.remove('imgSubtracaoMenuTitleBtnAcess');
      btnAcessContato.classList.add('imgAdicaoMenuTitleBtnAcess');
    }
  }
});

//Parte formulario
/*validação do formulario */
const btnSubmit = document.getElementById('BtnSubmit');
//declaração de lista para confirmação de validação dos dados
let listaConfirmacao = [];
//declara a variavel com o elemento de entrada do campo nome do usuario
const containerNome = document.getElementById('username');
//evento que muda cor de fundo se não atender a condição
containerNome.addEventListener('blur',(e)=>{
  let valorNome = e.target.value;
  if(valorNome.length < 4 || valorNome== null){
    containerNome.classList.add('errorContainer');
    e.target.setCustomValidity("");
    listaConfirmacao[0] = "";
  }else{
    containerNome.classList.remove('errorContainer');
    e.target.setCustomValidity("Deve conter no minimo 3 caracteres no campo nome");
    listaConfirmacao[0] = "O";
  }
})
//declara a variavel com o elemento de entrada do campo email  do usuario
const containerEmail = document.getElementById('email_User');
//evento que muda a cor de fundo do campo quando não atende a condição
containerEmail.addEventListener('blur',(e)=>{
  let valorEmail = e.target.value;
  if(!valorEmail.includes("@") && !valorEmail.includes(".com")){
    containerEmail.classList.add('errorContainer');
    listaConfirmacao[1] = "";
  }else{
    containerEmail.classList.remove('errorContainer');
    listaConfirmacao[1] = "O";
  }
})
//declara a variavel com o elemento de entrada do campo de assunto 
const containerAssunto = document.getElementById('assunto');
//evento que muda a cor de fundo do campo quando não atende a condição
containerAssunto.addEventListener('blur',(e)=>{
  let valorAssunto = e.target.value;
  if(valorAssunto.length < 6 || valorAssunto == null){
    containerAssunto.classList.add('errorContainer');
    listaConfirmacao[2] = "";
  }else{
    containerAssunto.classList.remove('errorContainer');
    listaConfirmacao[2] = "K";
  }
})
//declara a variavel com o elemento de entrada do campo de mensagem
const containerMensagem = document.getElementById('mensagemUsuario');
//evento que muda a cor de fundo do campo quando não atende a condição
containerMensagem.addEventListener('blur', (e)=>{
  let valorMensagem = e.target.value;
  if(valorMensagem < 6 || valorMensagem == null){
    containerMensagem.classList.add('errorContainer');
    listaConfirmacao[3] = "";
  }else{
    containerMensagem.classList.remove('errorContainer');
    listaConfirmacao[3] = "K";
  }
})
//declaração das variaveis de controle e container popup
var confirmacao ='';
const containerPopup = document.getElementsByClassName('popup');
const msgPopupErro = document.getElementsByClassName('msgPopupErro');
const msgPoupupSucesso = document.getElementsByClassName('msgPopupSucesso');
//evento de validação dos campos e envio dos dados 
btnSubmit.addEventListener('click',(e)=>{
  e.preventDefault();

  const inputNameUsuario = document.querySelector('#username');
  const inputEmailUsuario = document.getElementById('email_User');
  const inputTelefoneUsuario = document.getElementById('telefone');
  const inputAssuntoUsuario = document.getElementById('assunto');
  const inputMensagemUsuario = document.getElementById('mensagemUsuario');

  var data = {
    username: inputNameUsuario.value,
    email_User: inputEmailUsuario.value,
    telefone: inputTelefoneUsuario.value,
    assunto: inputAssuntoUsuario.value,
    mensagemUsuario: inputMensagemUsuario.value
  };
  confirmacao = "";
  for (const key in listaConfirmacao) {
    confirmacao = confirmacao + listaConfirmacao[key];
  }
  console.log(confirmacao);
  //laço condicional de confirmação da condição de validação
  if(confirmacao == "OOKK"){
    fetch("https://getform.io/f/fa39633c-9e5c-4888-942b-d4b774bea1bc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    
    inputNameUsuario.value = "";
    inputEmailUsuario.value = "";
    inputTelefoneUsuario.value = "";
    inputAssuntoUsuario.value = "";
    inputMensagemUsuario.value = "";
    for (const key in listaConfirmacao) {
      listaConfirmacao[key] = "";
    }
    containerPopup[0].style.display="flex";
    msgPoupupSucesso[0].style.display = "block";
    msgPoupupSucesso[1].style.display = "block";
    msgPoupupSucesso[2].style.display = "block";
    msgPopupErro[0].style.display = "none";
    msgPopupErro[1].style.display = "none";
  }else{
    containerPopup[0].style.display="flex";
    msgPopupErro[0].style.display = "block";
    msgPopupErro[1].style.display = "block";
    msgPoupupSucesso[0].style.display = "none";
    msgPoupupSucesso[1].style.display = "none";
    msgPoupupSucesso[2].style.display = "none";
  }
  
});

/*declaração da variavel do elemento button do popup */
const btnFechaPopup = document.getElementsByClassName('button_popup');
//evento de fechamento do popup
btnFechaPopup[0].addEventListener('click',(e)=>{
  containerPopup[0].style.display = "none";
})