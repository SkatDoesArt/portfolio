let slides = document.querySelector('.slider .slides');
let slide = document.querySelectorAll('.slider .slides .slide');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthSlide = slide.length - 1;

next.onclick = function(){
    if (active + 1 > lengthSlide){
        active = 0;
    } else {
        active = active + 1
    }
    reloadSlider();
}

prev.onclick = function(){
    if (active - 1 < 0){
        active = lengthSLide;
    } else {
        active = active - 1
    }
    reloadSlider();
}

let refreshSlider = setInterval(()=>{next.click()}, 5000);
function reloadSlider(){
    let checkLeft = slide[active].offsetLeft;
    slides.style.left = -checkLeft + 'px';
    
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=>{next.click()}, 8000);
}

dots.forEach((li, key) =>{
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})