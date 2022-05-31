const skills = [
  {
    nome: 'HTML',
    percent: 95
  },
  {
    nome: 'CSS',
    percent: 95
  },
  {
    nome: 'BOOTSTRAP',
    percent: 90
  },
  {
    nome: 'JAVASCRIPT',
    percent: 80
  },
  {
    nome: 'TYPESCRIPT',
    percent: 50
  },
  {
    nome: 'SASS',
    percent: 50
  },
  {
    nome: 'REACT',
    percent: 40
  },
  {
    nome: 'TAILWIND',
    percent: 20
  }
]

function start(i) {
  var skillPercent = document.querySelector(
    `#skill__progress-${i} .skill__percent`
  )
  var skillProgressing = document.querySelector(
    `#skill__progress-${i} .skill__progressing`
  )

  var progress = 0
  var percentual = skills[i].percent

  requestAnimationFrame(startProgress)

  function startProgress() {
    progress += 1
    if (progress <= percentual) {
      skillPercent.innerHTML = parseInt(progress) + '%'
      skillProgressing.style.width = progress + '%'
    }
    requestAnimationFrame(startProgress)
  }
}

var container = document.querySelector('.about__skill-container')

for (let i = 0; i < skills.length; i++) {
  container.innerHTML += `
         <div class="skill__progress" id="skill__progress-${i}">
            <div class="skill__info">
              <h6 class="skill__title">${skills[i].nome}</h6>
              <p class="skill__percent">${skills[i].percent}%</p>
            </div>
            <div class="skill__progress-bar">
              <div class="skill__progressing"></div>
            </div>
          </div>
        `
}

for (var i = 0; i < skills.length; i++) {
  start(i)
}
