const printButton = document.querySelector('#print-checklist');
printButton.hidden = false;
printButton.addEventListener('click', () => window.print());
