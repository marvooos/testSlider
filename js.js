let offset = 0;
const sliderLine = document.querySelector('.slider-line');
let Box1 = document.querySelector('.Box1');
let Box2 = document.querySelector('.Box2');
let Box3 = document.querySelector('.Box3');

document.querySelector('.prev').addEventListener('click', function () {
    offset = offset + 363;
    Box2.classList.remove('slider-div-active');
    Box2.classList.add('slider-div');

    Box1.classList.add('slider-div-active');
    Box1.classList.remove('slider-div');


    if (offset > 363) {
        offset = -363;


        
        if (offset = -363) {
            Box1.classList.remove('slider-div-active');
            Box1.classList.add('slider-div');
        
            Box3.classList.add('slider-div-active');
            Box3.classList.remove('slider-div');
        } else if (offset <= 0) {
            Box2.classList.add('slider-div-active');
            Box2.classList.remove('slider-div');
        }
    } 

    sliderLine.style.left = offset + 'px';




});

