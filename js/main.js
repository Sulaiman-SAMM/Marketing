"use Strict";


// ------------------------- Navbar -------------------------

let navbarButton = document.querySelectorAll('.navbar-button'),
    navbar       = document.querySelector('.navbar');

for(let i = 0; i < navbarButton.length ; i++){
    navbarButton[i].addEventListener('click',()=>{
        navbar.classList.toggle('active')
    })
}

// ------------------------- Scroll Down -------------------------

let scrollDown = document.querySelector('.scroll-down');

scrollDown.addEventListener('click',function(){
    let idSection = document.getElementById(scrollDown.getAttribute('data-about'));
    idSection.scrollIntoView({
        behavior:'smooth'
    })
})
// ------------------------- Haeder Fixed -------------------------

const header = document.querySelector('.header');
window.addEventListener('scroll',function(){
    header.classList[this.window.scrollY> 100 ? 'add':'remove']('active');
})