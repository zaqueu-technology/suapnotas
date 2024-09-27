import { giveListeners, calculoAnual } from "./preventNumber.js";

let notas = document.querySelector('.notas');

export function showAnual(){
  notas.innerHTML='';
  if(notas.classList.contains('notas__bimestral')){
    notas.classList.remove('notas__bimestral');
  }
  notas.classList.add('notas__anual');
  notas.innerHTML=`
  <div class="nota1 notas__item__anual">
    <span class="nota__title">Nota 1</span><input type="number" class="item__input" data-nota="1">
  </div>
  <div class="nota2 notas__item__anual">
    <span class="nota__title">Nota 2</span><input type="number" class="item__input" data-nota="2">
  </div>
  <div class="nota3 notas__item__anual">
    <span class="nota__title">Nota 3</span><input type="number" class="item__input" data-nota="3">
  </div>
  <div class="nota2 notas__item__anual">
    <span class="nota__title">Nota 4</span><input type="number" class="item__input" data-nota="4">
  </div>
  `;

  giveListeners();
  calculoAnual();
}