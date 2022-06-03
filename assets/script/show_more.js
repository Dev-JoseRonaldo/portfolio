let loadMoreBtn = document.querySelector('#load-more')
let hiddenMoreBtn = document.querySelector('#hidden-more')
let currentItem = 6

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll('.items__box')]
  for (var i = currentItem; i < currentItem + 6 && i < boxes.length; i++) {
    boxes[i].style.display = 'flex'
  }
  currentItem += 6

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none'
    hiddenMoreBtn.style.display = 'inline-block'
  }
}

hiddenMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll('.items__box')]
  for (let i = boxes.length - 1; i >= 6; i--) {
    boxes[i].style.display = 'none'
  }
  currentItem = 6

  loadMoreBtn.style.display = 'inline-block'
  hiddenMoreBtn.style.display = 'none'
}
