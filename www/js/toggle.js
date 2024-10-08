import { showBimestral } from "./bimestral.js";
import { showAnual } from "./anual.js";
import { zerar, calculoAnual, calculoBimestral } from "./preventNumber.js";

const bimestralButton = document.querySelector('.bimestral');
const anualButton = document.querySelector('.anual');

export function toggleButton(){
  showBimestral();
  bimestralButton.addEventListener('click', verifyButton);
  anualButton.addEventListener('click', verifyButton);
}

function verifyButton(e){
  const dataType = e.target.dataset.category;

  if(dataType === 'anual'){
    if(anualButton.classList.contains('item__selected')){
      return;
    }else{
      anualButton.classList.add('item__selected');
      bimestralButton.classList.remove('item__selected');

      zerar();
      showAnual();
    }
  } else if(dataType == 'bimestral'){
    if(bimestralButton.classList.contains('item__selected')){
      return;
    }else{
      bimestralButton.classList.add('item__selected');
      anualButton.classList.remove('item__selected');

      zerar();
      showBimestral();
    }
  } 
}