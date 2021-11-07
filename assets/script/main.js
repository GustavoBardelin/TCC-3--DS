/*==========================================================================================================*/
/*--------------------------------ANIMAÇÃO DO MEUN QUANDO DÁ SCROLL ----------------------------------------*/
/*----------------------------------------------- E ----=================-----------------------------------*/
/*--------------------------------ANIMAÇÃO DO BTN BACK-TO-TOP ----------------------------------------------*/
/*==========================================================================================================*/

const header = document.querySelector(".header");
const btnBackToTop = document.querySelector(".back-to-top");

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 30);
  btnBackToTop.classList.toggle('sticky', window.scrollY > 30);

});


/*
=============================================================================================================
----------------------------- ESTILIZAÇÃO DO MENU NA SECTION REFERENTE A ELE-------- --------------------------===============================================================================================================
*/

const sections = document.querySelectorAll("section[id]");
const navLi = document.querySelectorAll(".menu-link-wrapper li a");

window.addEventListener("scroll", () => {

  let current = "";
  let disTop = window.scrollY;

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (disTop >= sectionTop - sectionHeight / 3) {

      current = section.getAttribute("id");

    }

  });

  navLi.forEach((li) => {

    li.classList.remove("active");

    if ((li.getAttribute('href')) == ("#" + current)) {

      li.classList.add("active");
    }

  });

});



/*
=============================================================================================================
----------------------------- ANIMAÇÃO DO SCROLL QUANDO É CLICADO EM UM LINK DO MENU --------------------------===============================================================================================================
*/


navLi.forEach((link) => {
  link.addEventListener('click', scrollToSection);
})

function distanciaSectionTop(element){

  const id = element.getAttribute("href");

  return document.querySelector(id).offsetTop;
}


function scrollToSection(event){

  event.preventDefault();
  const distanciaSection = distanciaSectionTop(event.target);

  smoothScrollTo(0, distanciaSection, 450);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};



/*
=============================================================================================================
----------------------------------------- CARROSSEL SLIDE INICIO ---------------------------------------------===============================================================================================================
*/

const slides = document.querySelectorAll('.item-carousel');
const carousel = document.getElementById('carousel');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const slides_count = slides.length;
let slider = true;

let currentSlide = 0;

btnPrev.addEventListener('click', slidePrev);
btnNext.addEventListener('click', slideNext);


setInterval(() => {
  
  if(slider){
    
    slideNext();

  }else{

    slider = true;

  }

}, 10000);



function slidePrev(){

  currentSlide--;
  slider = false;

  if(currentSlide < 0){
    currentSlide = slides_count - 1;
  }

  updateCarousel();

}

function slideNext(){

  currentSlide++;
  slider = false;

  if(currentSlide > slides_count - 1){
    currentSlide = 0;
  }

  updateCarousel();

}


function updateCarousel(){
  
  carousel.style.transform = `translateX(${
    -currentSlide * slides[0].offsetWidth
  }px)`

}

 




