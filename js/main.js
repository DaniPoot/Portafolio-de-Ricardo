const $burgerButton = document.querySelector('.hamburger')
const $navMobile = document.querySelector('.navbar-mobile')
const $body = document.querySelector('body')


const actionNavbar = () => {
  $body.classList.toggle('overflow-hidden')
  $burgerButton.classList.toggle('hamburger--active')
  $navMobile.classList.toggle('navbar-mobile--active')
}

$burgerButton.addEventListener('click', actionNavbar)


$navMobile.addEventListener('click', e => {
  const tag = e.target.tagName.toLowerCase()
  if (!(tag === 'li' || tag === 'a')) return
  actionNavbar()
})


