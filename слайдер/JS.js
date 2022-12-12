const prev = document.querySelectorAll('.left'), //стрелка вперед
      next = document.querySelectorAll('.right'), //стрелка назад
      slides = document.querySelectorAll('.slide'), //фото
      dots = document.querySelectorAll('.dots'); //точки

let index = 0; //отслеживание текущего слайда

//функция, которая делает активным slide 
const activeSlide = n =>{         
    console.log(n);
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDots(index);
}

//функция, которая меняет slide (цикличность, вперед)
const nextSlade = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index); 
    } else{
        index++;
        prepareCurrentSlide(index); 
    }
}

//событие для кнопки next
next.addEventListener('click', nextSlade);   

//функция, которая меняет slide (цикличность, назад)
const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index); 
    } else{
        index--;
        prepareCurrentSlide(index); 
    }
}

prev.addEventListener('click', prevSlide);   

//функция, которая делает активным dot 
const activeDot = n =>{         
    console.log(n);
    for(dots of dots) {
        dots.classList.remove('active');
    }
    dots[n].classList.add('active');
}