let nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0;
const resultado = document.querySelector('.resultado');
let notaRestante = 0;

const bimestralButton = document.querySelector('.bimestral');
const anualButton = document.querySelector('.anual');


export function giveListeners(){
  const changeInput = document.querySelectorAll('.item__input');
  for(let i=0; i<changeInput.length;i++){
    changeInput[i].addEventListener('input', verifyLength);
  }
}

function verifyLength(e){
  const input = e.target;

  if (input.value === '100') {
    return; // Sai da função se a nota já for 100
  }

  if (input.value.length > 3) {
    input.value = input.value.slice(0, 3); // Limita o valor a 3 caracteres
}

  if(input.value.length > 2 && input.value.substr(0,2) === '10'){
    if(e.target.dataset.nota === '1'){
      nota1 = 100;
      if(bimestralButton.classList.contains('item__selected')){
        calculoNotaRestanteBimestral(e);
        calculoBimestral();
      }
    } else if(e.target.dataset.nota === '2'){
      nota2 = 100;
      if(bimestralButton.classList.contains('item__selected')){
        calculoNotaRestanteBimestral(e);
        calculoBimestral();
      }
    }
  }else if(input.value.length > 2) {
    input.value = input.value.slice(0, 2); // Limita o valor a 2 caracteres
  }
  if(input.value.length <= 2){
    if(e.target.dataset.nota === '1'){
      nota1 = Number(e.target.value);
      if(bimestralButton.classList.contains('item__selected')){
        calculoNotaRestanteBimestral(e);
        calculoBimestral();
      }
    } else if(e.target.dataset.nota === '2'){
      nota2 = Number(e.target.value);
      if(bimestralButton.classList.contains('item__selected')){
        calculoNotaRestanteBimestral(e);
        calculoBimestral();
      }
    }
  }
}

function calculoBimestral(){
  let calc = Math.round((nota1 * 2 + nota2 * 3)/5);
  if(calc >= 60){
    resultado.innerHTML = `Média = ${calc} <div class="text__resultado__aprovado"><i class='bx bxs-trophy'></i>APROVADO</div>`;
  }else{
    resultado.innerHTML = `Média = ${calc} <div class="text__resultado__reprovado"><i class='bx bxs-ghost'></i>REPROVADO</div>`;
  }
}

function calculoNotaRestanteBimestral(k){
  const nota1Input = document.querySelector('input[data-nota="1"]');
  const nota2Input = document.querySelector('input[data-nota="2"]');

  let notaTemp = k.target.dataset.nota;
  if(notaTemp == '1'){
    notaRestante = 0;
    for(let i = 1; i<=100; i++){
      if(Math.round((nota1 * 2 + i * 3)/5) === 60){
        notaRestante = i;
        nota2Input.placeholder = notaRestante;
        if(notaRestante === 100){
          nota1Input.placeholder = 0;
        }
        break;
      }
      
    }
  }
  /* else if(notaTemp == '2'){
    notaRestante = 0;
    for(let i = 1; i<=100; i++){
      if(Math.round((i * 2 + nota2 * 3)/5) === 60){
        notaRestante = i;
        nota1Input.placeholder = notaRestante;
        break;
      }
    }
    if(notaRestante === 0){
      nota1Input.placeholder = 'F';
    }
  } */
} 