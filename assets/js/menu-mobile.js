const btnMobile = document.getElementById('btn-mobile');
const logo = document.getElementById('logo');
const header = document.getElementById('header')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    //logo.style.display = 'none'
    btnMobile.style.color = 'red'
    header.style.backgroundColor = '#4db870'
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    //logo.style.display = 'block'  
    btnMobile.style.color = '#fff'
    header.style.backgroundColor = '#228b22'

  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);