import { getProjectsContent } from '../../services/getProjectsContent.js'

const projectContainer = document.querySelector('.projects__items')
console.log(projectContainer)

getProjectsContent()
  .then(data => {
    Projects(data)
  })
  .catch(error => {
    console.log(error)
  })

const Projects = props => {
  for (let i = 0; i < props.length; i++) {
    let stacksTag = ''
    let stacks = ''

    // loop responsável por formar todas as tags de icones das stacks
    for (let j = 0; j < props[i].icon_stack.length; j++) {
      stacksTag +=
        '<i class="' +
        props[i].icon_stack[j] +
        '" title="' +
        props[i].stack[j] +
        '"></i>\n'

      stacks += `${props[i].stack[j]} `
    }

    projectContainer.innerHTML += `
    <div class="items__box ${stacks}">
      <div class="project__box-img">
        <img
          class="projects__img"
          src="${props[i].img_url}"
          alt="Banner do projeto ${props[i].title}"
        />
      </div>
      <div class="project__info">
        <h4 class="project__title">${props[i].title}</h4>
        <p class="projet__text">
          ${props[i].description}
        </p>
        <div class="project__stack">
          <h5 class="slack__title">Tecnologias</h5>
          <div class="slack__icons-box">
            ${stacksTag}
          </div>
        </div>
        <div class="project__buttons">
          <a
            class="button projects-hover__button button--animate button--small"
            href="${props[i].deploy_url}"
            target="blank"
          >
            Site no ar
            <span class="button__span button__span"></span>
          </a>
          <a
            class="button projects-hover__button button--animate button--small"
            href="${props[i].github_url}"
            target="blank"
          >
            Github
            <span class="button__span button__span"></span>
          </a>
        </div>
        <div class="project__date-box">
          <i class="date-box__date fa-solid fa-calendar-days"></i>
          ${props[i].date}
        </div>
      </div>
    </div>
  `
  }
}
