export let nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0;
const resultado = document.querySelector('.resultado');
let notaRestante = 0;

const bimestralButton = document.querySelector('.bimestral');
const anualButton = document.querySelector('.anual');

export function giveListeners() {
  const changeInput = document.querySelectorAll('.item__input');
  for (let i = 0; i < changeInput.length; i++) {
    changeInput[i].addEventListener('input', verifyLength);
  }
}

function verifyLength(e) {
  const input = e.target;

  // Verifica se o valor digitado é um número
  let valorNumerico = Number(input.value);

  // Limita o valor a 3 caracteres
  if (input.value.length > 3) {
    input.value = input.value.slice(0, 3); // Limita a 3 caracteres
    valorNumerico = Number(input.value); // Atualiza o valor numérico após a limitação
  }

  // Se o valor for maior que 100, redefine para 100
  if (valorNumerico > 100 && input.value.slice(0,2) == '10') {
    input.value = '100'; // Substitui por '100' para manter o valor
    valorNumerico = 100; // Garante que o valor a ser usado nos cálculos seja 100
  }else if (valorNumerico > 100){
    input.value = input.value.slice(0,2);
    valorNumerico = Number(input.value);
  }

  // Verifica e armazena o valor das notas
  if (input.value.length <= 3) {
    if (e.target.dataset.nota === '1') {
      nota1 = valorNumerico; // Armazena o valor corretamente
    } else if (e.target.dataset.nota === '2') {
      nota2 = valorNumerico; // Armazena o valor corretamente
    } else if (e.target.dataset.nota === '3') {
      nota3 = valorNumerico; // Armazena o valor corretamente
    } else if (e.target.dataset.nota === '4') {
      nota4 = valorNumerico; // Armazena o valor corretamente
    }

    // Chama as funções de cálculo após atribuir as notas
    if (bimestralButton.classList.contains('item__selected')) {
      calculoNotaRestanteBimestral(e);
      calculoBimestral();
    } else {
      calculoNotaRestanteAnual();
      calculoAnual();
    }
  }

  // Log para verificar os valores
  console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Nota 4: ${nota4}`);
}

export function zerar(){
  nota1 = 0;
  nota2 = 0;
  nota3 = 0;
  nota4 = 0;
}

export function calculoBimestral() {
  let calc = Math.round((nota1 * 2 + nota2 * 3) / 5);
  if(!nota1 || !nota2){
    resultado.innerHTML = `Média = ${calc}`;
    return;
  }else if (calc >= 60) {
    resultado.innerHTML = `Média = ${calc} <div class="text__resultado__aprovado"><i class='bx bxs-trophy'></i>APROVADO</div>`;
  } else {
    resultado.innerHTML = `Média = ${calc} <div class="text__resultado__reprovado"><i class='bx bxs-ghost'></i>REPROVADO</div>`;
  }
}

export function calculoAnual() {
  let calc = Math.round((nota1 * 2 + nota2 * 2 + nota3 * 3 + nota4 * 3) / 10);

  if(!nota1 || !nota2 || !nota3 || !nota4){
    resultado.innerHTML = `Média = ${calc}`;
    return;
  }else if (calc >= 60) {
    resultado.innerHTML = `Média = ${calc} <div class="text__resultado__aprovado"><i class='bx bxs-trophy'></i>APROVADO</div>`;
  } else {
    resultado.innerHTML = `Média = ${calc} <div class="text__resultado__reprovado"><i class='bx bxs-ghost'></i>REPROVADO</div>`;
  }
}

function calculoNotaRestanteBimestral() {
  const nota1Input = document.querySelector('input[data-nota="1"]');
  const nota2Input = document.querySelector('input[data-nota="2"]');

  notaRestante = 0;
  if(nota1Input.value){
    for (let i = 1; i <= 100; i++) {
      if (Math.round((nota1 * 2 + i * 3) / 5) === 60) {
        notaRestante = i;
        nota2Input.placeholder = notaRestante;
        break;
      }
    }
  }else{
    nota2Input.placeholder = '';
  }
  
}

function calculoNotaRestanteAnual() {
  const nota1Input = document.querySelector('input[data-nota="1"]');
  const nota2Input = document.querySelector('input[data-nota="2"]');
  const nota3Input = document.querySelector('input[data-nota="3"]');
  const nota4Input = document.querySelector('input[data-nota="4"]');

  if (nota1Input.value && nota2Input.value && nota3Input.value) {
    notaRestante = 0;
    if (Math.round((nota1 * 2 + nota2 * 2 + nota3 * 3) / 10) >= 60){
      nota4Input.placeholder = '-1';
      return;
    } else{
      nota4Input.placeholder = 'F';
    }
    for (let i = 1; i <= 100; i++) {
      if (Math.round((nota1 * 2 + nota2 * 2 + nota3 * 3 + i * 3) / 10) === 60) {
        notaRestante = i;
        nota4Input.placeholder = notaRestante;
        break;
      }
    }
  }else{
    nota4Input.placeholder = '';
  }
}
