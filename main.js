//For menu hide and display
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*Removing the menu on click*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Scroll sections active link*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*Change Background Header*/
function scrollHeader() {
    const nav = document.getElementById('header')

    //when scroll is greater than 200 viewport, activate the scroll-header class
    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

/*Show scroll top to get back to the top of the page*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')

    //when scroll is higher than 560 viewport, activate the scroll-header class
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top');
    else scrollTop.classList.remove('scroll-top');
}
window.addEventListener('scroll', scrollTop)

//Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
    reset: true
});

sr.reveal(`.home__data, .home__img, .menu__content, .contact__data, .contact__button`, {
    interval: 200
})