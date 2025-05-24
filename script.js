function rolarCarrossel(direcao) {
  const carrossel = document.getElementById('carrossel');
  const distanciaRolagem = 300; 

  carrossel.scrollBy({
    left: direcao * distanciaRolagem,
    behavior: 'smooth'
  });
}

function rolarCarrossel2(direcao) {
  const carrossel = document.getElementById('carrossel2');
  const distanciaRolagem = 300; 

  carrossel.scrollBy({
    left: direcao * distanciaRolagem,
    behavior: 'smooth'
  });

}

const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarMenu)

function animarMenu() {
  menuDiv.classList.toggle('abrir')
  btnAnimar.classList.toggle('ativo')
}

