import { toggleButton } from "./toggle.js";


document.addEventListener('deviceready', function () {
    StatusBar.hide();
}, false);

toggleButton();


/* window.addEventListener('focusin', () => {
    // Adiciona uma classe para a tela rolar
    document.body.classList.add('keyboard-active');
});
  
window.addEventListener('focusout', () => {
// Remove a classe quando o teclado fecha
document.body.classList.remove('keyboard-active');
});  */

  


