//Toggle Mobile menu
document.addEventListener('DOMContentLoaded', function() {
const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
const mobieMenu = document.querySelector('.navbar .mobile-menu-items');

toggleButton.addEventListener('click', function() {
    mobieMenu.classList.toggle('active');

});

});

//Change navbar background on scroll
window.addEventListener('scroll', function() {
const navbar = document.querySelector('.navbar');
    if(window.scrollY > 0){
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
}); 