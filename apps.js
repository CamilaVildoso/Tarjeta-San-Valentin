let mensajesNo = [
  "Estas seguro?",
  "lo pensaste bien???",
  "Vamos te dare otra oportunidad",
  "Si dices que no otra vez estare muy triste :c",
  "ahhh te valio madres, cagaste ps",
  "era bromita, aceptame por fi",
  "Crj mochiiiiiiiiii",
  "No ves que esta opcion solo es de adorno XD"
];
let indiceMensajeNo = 0;
let tamañoBotonSi = 16;


function mostrarMensajeSi() {
  document.querySelector('.container').style.display = 'none';
  var mensaje = document.getElementById('mensaje');
  mensaje.classList.remove('hidden');

  var contenedorFlex = document.createElement('div');
  contenedorFlex.style.display = 'flex';
  contenedorFlex.style.flexDirection = 'column';
  contenedorFlex.style.position = 'top';
  contenedorFlex.style.marginTop = '50px';
  contenedorFlex.style.height = '100vh';

  var contenedorImg = document.createElement('div');
  contenedorImg.className = 'img-container';

  var img = document.createElement('img');
  img.src = 'https://getbubududu.com/wp-content/uploads/2023/09/Buy-Bubu-Dudu-Plushies-1.png'; 
  img.style.width = '200px';
  img.style.height = 'auto';
  contenedorImg.appendChild(img);

  contenedorFlex.appendChild(contenedorImg);

  var contenedorTexto = document.createElement('div');
  contenedorTexto.className = 'mensaje';

  var mensajeTexto = document.createElement('div');
  mensajeTexto.textContent = 'Lo sabía, esta iba a ser tu primera opción';

  contenedorTexto.appendChild(mensajeTexto);
  contenedorFlex.appendChild(contenedorTexto);
  document.body.appendChild(contenedorFlex);
}


function mostrarMensajeNo(){
  let botonNo = document.querySelector('.no-button');

  botonNo.textContent = mensajesNo[indiceMensajeNo];
  indiceMensajeNo++;

  if(indiceMensajeNo >= mensajesNo.length){
    indiceMensajeNo=0;
  }

  let botonSi = document.querySelector('.yes-button');
  tamañoBotonSi += 20;
  botonSi.style.fontSize = tamañoBotonSi + 'px';
}