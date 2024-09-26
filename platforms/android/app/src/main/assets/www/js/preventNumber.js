let nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0;
const resultado = document.querySelector('.resultado');

export function giveListeners(){
  const changeInput = document.querySelectorAll('.item__input');
  for(let i=0; i<changeInput.length;i++){
    changeInput[i].addEventListener('input', verifyLength);
  }
}

function verifyLength(e){
  const input = e.target;
  if(input.value.length > 2 && input.value.substr(0,2) === '10'){
    input.value = 100;
  }else if(input.value.length > 2) {
    input.value = input.value.slice(0, 2); // Limita o valor a 2 caracteres
  }
  if(input.value.length <= 2){
    if(e.target.dataset.nota === '1'){
      nota1 = Number(e.target.value);
      calculoBimestral();
    } else if(e.target.dataset.nota === '2'){
      nota2 = Number(e.target.value);
      calculoBimestral();
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