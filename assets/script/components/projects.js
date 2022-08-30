import { getProjectsContent } from '../../services/getProjectsContent.js'

const projectContainer = document.querySelector('.projects__items')

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
      if (props[i].stack[j] === 'typescript') {
        console.log('dale')
        stacksTag +=
          '<svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28px" height="28px"><path d="M3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H5C3.895,3,3,3.895,3,5z M13.666,12.451h-2.118	V19H9.841v-6.549H7.767V11h5.899V12.451z M13.998,18.626v-1.751c0,0,0.956,0.721,2.104,0.721c1.148,0,1.103-0.75,1.103-0.853	c0-1.089-3.251-1.089-3.251-3.501c0-3.281,4.737-1.986,4.737-1.986l-0.059,1.559c0,0-0.794-0.53-1.692-0.53	c-0.897,0-1.221,0.427-1.221,0.883c0,1.177,3.281,1.059,3.281,3.428C19,20.244,13.998,18.626,13.998,18.626z"/><title>Typescript</title></svg>'
      } else {
        stacksTag +=
          '<i class="' +
          props[i].icon_stack[j] +
          '" title="' +
          props[i].stack[j] +
          '"></i>\n'
      }

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
