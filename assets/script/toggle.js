let show = false

const menuSection = document.querySelector('.header__menu-section')
const menuToggle = document.querySelector('.header__menu-toggle')

const buttonsToggle = document.querySelectorAll('.header__item')

/* Exibe o menu mobile (se tiver oculto) e desativa a rolagem da página (se tiver ativada),
 ou esconde o menu mobile (se tiver visível) e ativa a rolagem da página (se tiver desativada), ao clickar no ícone do menu mobile */

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'
  menuSection.classList.toggle('on', show)
  show = !show
})

/* apenas Esconde o menu mobile (se tiver visível) e ativa a rolagem da página (se tiver desativada), ao clickar nos links de navegação  */

for (let i = 0; i < buttonsToggle.length; i++) {
  buttonsToggle[i].addEventListener('click', () => {
    document.body.style.overflow = 'initial'
    menuSection.classList.toggle('on', show)
    show = !show
  })
}
