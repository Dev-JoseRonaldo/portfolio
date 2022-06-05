let show = true

const menuSection = document.querySelector('.header__menu-section')
const menuToggle = document.querySelector('.header__menu-toggle')

const buttonsToggle = document.querySelectorAll('.header__item')

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'
  menuSection.classList.toggle('on', show)
  show = !show
})

for (let i = 0; i < buttonsToggle.length; i++) {
  buttonsToggle[i].addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'initial'
    menuSection.classList.toggle('on', show)
    show = !show
  })
}
