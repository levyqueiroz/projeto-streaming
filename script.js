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


