// array estilo JSON para armazenar dados das skills
const skills = [
  {
    nome: 'HTML / CSS',
    percent: 95
  },
  {
    nome: 'JAVASCRIPT',
    percent: 90
  },
  {
    nome: 'TYPESCRIPT',
    percent: 80
  },
  {
    nome: 'REACT JS',
    percent: 90
  },
  {
    nome: 'NEXT JS',
    percent: 70
  },
  {
    nome: 'REACT NATIVE',
    percent: 40
  },
  {
    nome: 'NODE JS',
    percent: 30
  },
  {
    nome: 'SASS',
    percent: 70
  },
  {
    nome: 'TAILWIND',
    percent: 90
  },
  {
    nome: 'STYLED-COMPONENTS',
    percent: 70
  },
  {
    nome: 'BOOTSTRAP',
    percent: 80
  },
  {
    nome: 'STORYBOOK',
    percent: 70
  },
  {
    nome: 'JEST / REACT TESTING LIBRARY',
    percent: 70
  }
]

const about = document.querySelector('.about')
const container = document.querySelector('.about__skill-container')

// Adiciona as skills dinamicamento no HTML
for (let i = 0; i < skills.length; i++) {
  container.innerHTML += `
         <div class="skill__progress" id="skill__progress-${i}">
            <div class="skill__info">
              <h6 class="skill__title">${skills[i].nome}</h6>
              <p class="skill__percent">0%</p>
            </div>
            <div class="skill__progress-bar">
              <div class="skill__progressing"></div>
            </div>
          </div>
        `
}

// Ativa a animação das barras de skill atraves da posição da tela pelo evento de scroll
window.addEventListener('scroll', function checkPos() {
  const sectionPos = about.getBoundingClientRect().top
  const screenPos = window.screen.height
  if (sectionPos < screenPos - 400) {
    console.log(window.screen.height)
    showSkills()
    this.removeEventListener('scroll', checkPos)
  }
})
const sectionPos = about.getBoundingClientRect().top
console.log(sectionPos)
console.log(window.screen.height)
if (sectionPos < window.screen.height) {
  showSkills()
}
function showSkills() {
  for (var i = 0; i < skills.length; i++) {
    start(i)
  }
}

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
