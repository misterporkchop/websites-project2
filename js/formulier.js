// HTML5-validatie met Bootstrap-opmaak voor het contactformulier
const formulier = document.querySelector('.needs-validation');

if (formulier) {
  formulier.noValidate = true;

  formulier.addEventListener('submit', event => {
    if (!formulier.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    formulier.classList.add('was-validated');
  });
}
