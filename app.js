const btn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuList = document.querySelector('.mobile-menu-container ul');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 0) {
       document.querySelector('nav').classList.add('nav-scroll')
    } else if (window.pageYOffset === 0) {
        document.querySelector('nav').classList.remove('nav-scroll')
    }
})

btn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-toggle');
})

mobileMenuList.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu-toggle');
})