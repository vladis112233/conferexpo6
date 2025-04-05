document.addEventListener('DOMContentLoaded', () => {

  const pushmenu = document.getElementsByClassName('pushmenu');

  const hiddenOverley = document.querySelector('.hidden-overley');

  hiddenOverley.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('show');
    document.querySelector('.sidebar').classList.toggle('show');
    document.querySelector('body').classList.toggle('sidebar-opened');
    for( i=0; i < pushmenu.length; i++ ){
      pushmenu[i].classList.toggle('open');
    }
  });

  const pushmenuFunction = function() {
    document.querySelector('.pushmenu').classList.toggle('open');
    document.querySelector('.sidebar').classList.toggle('show');
    document.querySelector('.hidden-overley').classList.toggle('show');
    document.body.classList.toggle('sidebar-opened')
  };

  for( i=0; i < pushmenu.length; i++ ){
    pushmenu[i].addEventListener('click', pushmenuFunction, false);
  }

  const sidebarAccordeon = document.querySelectorAll('.sidebar .menu-parent-item a:first-child');
  const accordeonFunction =  function() {
    this.parentNode.querySelector('ul').classList.toggle('show');
    this.querySelector('i').classList.toggle('rotate');
  }
  for( i=0; i < sidebarAccordeon.length; i++ ){
    sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
  }
});


const carousel = document.querySelector('.carousel');
const slides = carousel.children;
const totalSlides = slides.length;
const visibleSlides = 3;
let index = 0;

function moveCarousel() {
  index++;

  if (index >= totalSlides - visibleSlides + 1) {
    index = 0;
  }

  carousel.style.transform = `translateX(${-index * 300}px)`; // Сдвигаем на ширину одного слайда
}

setInterval(moveCarousel, 3000);



const carousel1 = document.querySelector('.carousel1');
const slides1 = carousel1.children;
const totalSlides1 = slides1.length;
const visibleSlides1 = 4;
let index1 = 0;

function moveCarousel1() {
  index1--;

  if (index1 < 0) {
    index1 = totalSlides1 - visibleSlides1;
  }

  carousel1.style.transform = `translateX(${-index1 * 300}px)`;
}

setInterval(moveCarousel1, 3000);



const carousel3 = document.querySelector('.carousel3');
const slides3 = carousel3.children;
const totalSlides3 = slides3.length;
const visibleSlides3 = 2;
let index3 = 0;

function moveCarousel3() {
  index3++;

  if (index3 >= totalSlides3 - visibleSlides3 + 1) {
    index3 = 0;
  }

  carousel3.style.transform = `translateX(${-index3 * 300}px)`; // Сдвигаем на ширину одного слайда
}

setInterval(moveCarousel3, 3000);




const carousel4 = document.querySelector('.carousel4');
const slides4 = carousel4.children;
const totalSlides4 = slides4.length;
const visibleSlides4 = 5;
let index4 = 0;

function moveCarousel4() {
  index4--;

  if (index4 < 0) {
    index4 = totalSlides4 - visibleSlides4;
  }

  carousel4.style.transform = `translateX(${-index4 * 300}px)`;
}

setInterval(moveCarousel4, 3000);



const carousel5 = document.querySelector('.carousel5');
const slides5 = carousel5.children;
const totalSlides5 = slides5.length;
const visibleSlides5 = 3;
let index5 = 0;

function moveCarousel5() {
  index5++;

  if (index5 >= totalSlides5 - visibleSlides5 + 1) {
    index5 = 0;
  }

  carousel5.style.transform = `translateX(${-index5 * 300}px)`;
}


setInterval(moveCarousel5, 3000);





document.querySelectorAll('.a-li-under-menu').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});




document.querySelectorAll('#menu-main-menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});


document.querySelector('.button-to-contact .link-to-contact').addEventListener('click', function (e) {
  e.preventDefault();

  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
});
