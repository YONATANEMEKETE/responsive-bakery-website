/*=============== SHOW MENU ===============*/
const toggle = document.getElementById('nav-toggle'); 
const close = document.getElementById('nav-close'); 
const menu = document.getElementById('nav-menu'); 

toggle.addEventListener('click', () => {
  menu.classList.toggle('show-menu')
}); 
close.addEventListener('click', () => {
  menu.classList.remove('show-menu')
})

/*=============== REMOVE MENU MOBILE ===============*/
const links = document.querySelectorAll('.nav__link');  

links.forEach(nl => {
  nl.addEventListener('click', () => {
      menu.classList.remove('show-menu')
  })
})

/*=============== ADD BLUR HEADER ===============*/
const header = document.getElementById('header'); 


const blurHeader = () => {
  this.scrollY > 50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
 
window.addEventListener('scroll', blurHeader); 
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = document.getElementById('scroll-up'); 

const scrollActive = () => {
  this.scrollY > 350 ? scrollUp.classList.add('show-scroll')
                     : scrollUp.classList.remove('show-scroll')  
}

window.addEventListener('scroll', scrollActive); 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]'); 



const sectionActive = () => {
  let scrollY = window.pageYOffset; 

  sections.forEach(current => {
    const sectionTop = current.offsetTop - 58;
    const sectionHeight = current.offsetHeight;
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']'); 
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
    } 
  
  })
}; 
 

window.addEventListener('scroll', sectionActive); 

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
  //reset: true  fro repeat 
})

sr.reveal(`.home__data, .about__img, .about__data, .visit__data`)
sr.reveal(`.home__image, .footer__img-1, .footer__img-2`, {rotate: {z: -15}})
sr.reveal(`.home__bread, .about__bread`, {rotate: {z: 15}})
sr.reveal(`.home__footer`, {scale: 1, origin: 'bottom'}) 
sr.reveal(`.new__card:nth-child(1) img`, {rotate: {z: -30}, distance: '0px'}) 
sr.reveal(`.new__card:nth-child(2) img`, {rotate: {z: 15}, distance: '0px', delay: 600})
sr.reveal(`.new__card:nth-child(3) img`, {rotate: {z: -30}, distance: '0px', delay: 900}) 
sr.reveal(`.favorite__card img`, {interval: 100, rotate: {z: 15}, distance: '0px',}) 
sr.reveal(`.footer__container`, {scale: 1}) 