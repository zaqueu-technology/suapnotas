import { giveListeners } from "./preventNumber.js";

let notas = document.querySelector('.notas');

export function showBimestral(){
  notas.classList.add('notas__bimestral');
  notas.innerHTML=`
  <div class="nota1 notas__item__bimestral">
    <span class="nota__title">Nota 1</span><input type="text" class="item__input" data-nota="1">
  </div>
  <div class="nota2 notas__item__bimestral">
    <span class="nota__title">Nota 2</span><input type="text" class="item__input" data-nota="2">
  </div>
  `;

  giveListeners();
}
