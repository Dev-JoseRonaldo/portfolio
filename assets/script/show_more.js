let loadMoreBtn = document.querySelector('#load-more')
let hiddenMoreBtn = document.querySelector('#hidden-more')
let currentItem = 6

loadMoreBtn.onclick = () => {
  // Armazena todos os itens na variavel 'boxes'
  let boxes = [...document.querySelectorAll('.items__box')]
  // Torna visível 6 itens quando ele clickar no botão 'loadMoreBtn' até i < total de itens
  for (var i = currentItem; i < currentItem + 6 && i < boxes.length; i++) {
    boxes[i].style.display = 'flex'
  }
  currentItem += 6

  // Esconde o botão 'Load more' e torna visível o botão 'hiddenMoreBtn' quando todos os itens estão visíveis
  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none'
    hiddenMoreBtn.style.display = 'inline-block'
  }
}

hiddenMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll('.items__box')]

  // Deixa apenas 6 lementos visíveis quando ele clickar no botão 'hiddenMoreBtn'
  for (let i = boxes.length - 1; i >= 6; i--) {
    boxes[i].style.display = 'none'
  }
  currentItem = 6

  // Esconde novamento o botão 'hiddenMoreBtn' e volta a ser visível o botão 'loadMoreBtn'
  loadMoreBtn.style.display = 'inline-block'
  hiddenMoreBtn.style.display = 'none'
}
