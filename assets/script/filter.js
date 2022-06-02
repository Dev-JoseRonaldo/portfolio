function change() {
  var boxCheckbox = document.querySelectorAll(
    ".filter__checkbox input[type='checkbox']"
  )
  var boxFilterTwo = document.querySelectorAll(
    ".filterTwo input[type='checkbox']"
  )
  var filters = {
    filterCheckbox: getClassOfCheckedCheckboxes(boxCheckbox),
    filterTwo: getClassOfCheckedCheckboxes(boxFilterTwo)
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
  var projects = document.querySelectorAll('.items__box')
  var hiddenProjects = []

  if (!projects || projects.length <= 0) {
    return
  }

  if (filters.filterCheckbox.length <= 0) {
    hiddenMoreBtn.style.display = 'inline-block'
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

    if (filters.filterTwo.length > 0) {
      var isHidden = true

      for (var j = 0; j < filters.filterTwo.length; j++) {
        var filter = filters.filterTwo[j]

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
    projects[i].style.display = 'block'
  }

  if (hiddenProjects.length <= 0) {
    return
  }

  for (var i = 0; i < hiddenProjects.length; i++) {
    hiddenProjects[i].style.display = 'none'
  }

  loadMoreBtn.style.display = 'none'
  hiddenMoreBtn.style.display = 'none'
}
