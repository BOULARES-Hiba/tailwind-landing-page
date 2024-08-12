

const icon = document.querySelector('#menu-i');
const navlink = document.querySelector('.navlinks');
icon.addEventListener('click', () => {
     navlink.classList.toggle('hidden')
      navlink.classList.toggle('flex');
      icon.classList.toggle('bx-x')
 });

window.addEventListener('scroll',()=>{
navlink.classList.remove('opens');
icon.classList.remove('bx-x');
}) 