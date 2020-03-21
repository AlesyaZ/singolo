// menu
document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curPos =  window.scrollY;
  const sections = document.querySelectorAll('#wrapper>section');
  const links = document.querySelectorAll('#menu a');

  sections.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
       links.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)){
            a.classList.add('active');
        }
         })
        }
     });
}

// slider

let sliders = document.querySelectorAll('.slide');
let currentSlider = 0;
let isEnabled = true;

function changeCurrentSliders(n) {
    currentSlider = (n + sliders.length) % sliders.length;
}

function hideSlider(direction){
    isEnabled = false;
    sliders[currentSlider].classList.add(direction);
    sliders[currentSlider].addEventListener( 'animationend', function () {
        this.classList.remove('active', direction);
    });
}

function showSlider(direction){
    sliders[currentSlider].classList.add('next', direction);
    sliders[currentSlider].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function nextSlider(n) {
    hideSlider('to-left');
    changeCurrentSliders(n + 1);
    showSlider('from-right');
}

function previousSlider(n) {
    hideSlider('to-right');
    changeCurrentSliders(n - 1);
    showSlider('from-left');
}

document.querySelector('.control_right').addEventListener('click', function () {
    if (isEnabled) {
        nextSlider(currentSlider);
    }
});

document.querySelector('.control_left').addEventListener('click', function () {
    if (isEnabled) {
        previousSlider(currentSlider);
    }
});


// iphone fone

const iphone_vert = document.getElementById('iphone_not_fon_vert');
const iphone_horis = document.getElementById('iphone_not_fon_hor');

iphone_vert.addEventListener('click', () => event.target.style.opacity = event.target.style.opacity == 0 ? 1 : 0);
iphone_horis.addEventListener('click', () => event.target.style.opacity = event.target.style.opacity == 0 ? 1 : 0);


// portfolio btn

const menuPortfolio = document.getElementById('portfolio_menu');
const portfolioItems = document.querySelectorAll('.portfolio_images');
const images = document.getElementById('portfolio_conteiner');

    menuPortfolio.addEventListener('click', (event) => {
    menuPortfolio.querySelectorAll('.portfolio__button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');

    portfolioItems.forEach(element => {
    element.classList.remove('active');
    });

    event.target.classList.add('active');

const changeImg  =  images.lastElementChild.after(images.firstElementChild);  // portfolio btn shift img
});

// portfolio img

images.addEventListener('click', (eventa) => {
    images.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

