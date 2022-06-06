function change() {
  // Armazenando todos os checkbox em uma variável
  var boxCheckbox = document.querySelectorAll(
    ".filter__checkbox input[type='checkbox']"
  )

  // objeto para armazenar varios tipos de filtros ( fazer ordenação de projeto por data, melhores projetos, tecnologias etc, futuramente.)
  var filters = {
    filterCheckbox: getClassOfCheckedCheckboxes(boxCheckbox)
  }

  filterResults(filters)
}

function getClassOfCheckedCheckboxes(checkboxes) {
  var classes = []

  if (checkboxes && checkboxes.length > 0) {
    for (var i = 0; i < checkboxes.length; i++) {
      var cb = checkboxes[i]

      if (cb.checked) {
        classes.push(cb.getAttribute('rel'))
      }
    }
  }

  return classes
}

function filterResults(filters) {
  let loadMoreBtn = document.querySelector('#load-more')
  let hiddenMoreBtn = document.querySelector('#hidden-more')
  let errorText = document.querySelector('.project__error-box')
  var projects = document.querySelectorAll('.items__box')
  var hiddenProjects = []

  // Sair do filtro caso não tenha elementos (projetos) com a classe .items__box
  if (!projects || projects.length <= 0) {
    return
  }

  // filters.filterCheckbox.length = número de filtros selecionados, se for menor que 0 ou 0 todos os projetos vão ta visíveis e esseif    torna vísivel o botão de 'hiddenMoreBtn' e torna oculto a mensagem de 'nenhum projeto encontrado'
  if (filters.filterCheckbox.length <= 0) {
    hiddenMoreBtn.style.display = 'inline-block'
    errorText.style.display = 'none'
  }

  for (var i = 0; i < projects.length; i++) {
    var el = projects[i]

    if (filters.filterCheckbox.length > 0) {
      var isHidden = true

      for (var j = 0; j < filters.filterCheckbox.length; j++) {
        var filter = filters.filterCheckbox[j]

        if (el.classList.contains(filter)) {
          isHidden = false
          break
        }
      }

      if (isHidden) {
        hiddenProjects.push(el)
      }
    }
  }

  for (var i = 0; i < projects.length; i++) {
    projects[i].style.display = 'flex'
  }

  if (hiddenProjects.length <= 0) {
    return
  }

  for (var i = 0; i < hiddenProjects.length; i++) {
    hiddenProjects[i].style.display = 'none'
  }

  loadMoreBtn.style.display = 'none'
  hiddenMoreBtn.style.display = 'none'

  // Exibindo mensagem de erro caso não encontre nenhum projeto do filtro selecionado
  if (projects.length === hiddenProjects.length) {
    errorText.style.display = 'flex'
  }
  // Escondendo mensagem de erro caso tenha algum projeto encontrado
  if (projects.length - hiddenProjects.length > 0) {
    errorText.style.display = 'none'
  }
}
