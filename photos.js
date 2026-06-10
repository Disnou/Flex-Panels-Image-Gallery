const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  // Liga/desliga a classe que expande o painel
  this.classList.toggle('open');
}

function toggleActive(e) {
  // Alguns navegadores chamam a transição de 'flex', outros de 'flex-grow'
  // O includes garante que vai funcionar em qualquer navegador
  if (e.propertyName.includes('flex')) {
    // Liga/desliga a classe que faz o texto aparecer deslizando
    this.classList.toggle('open-active');
  }
}

// Para cada painel, adiciona as funções aos eventos
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
