const btnMobile = document.getElementById('btn-mobile');
const header = document.getElementById('header')
const menuDropdown = document.querySelector('.dropdown-menu')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    btnMobile.style.color = 'red'
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    btnMobile.style.color = 'rgb(0, 211, 24)'
    header.style.backgroundColor = 'rgba(39,53,65,0.9)'

  }
}
/* function dropdownMenu(event){

}

dropdownMenu.addEventListener('click', dropdownMenu) */
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);