

const icon = document.querySelector('#menu-i');
const navlink = document.querySelector('.navlinks');
icon.addEventListener('click', () => {
     navlink.classList.toggle('hidden')
      navlink.classList.toggle('flex');
      icon.classList.toggle('bx-x')
 });

window.addEventListener('scroll',()=>{
      if (navlink.classList.contains('flex')) { 
            navlink.classList.remove('flex');
            navlink.classList.add('hidden');
            icon.classList.remove('bx-x');
        }
}) 