

const carouselItems = document.querySelector('.carousel_items');
const slides = Array.from(carouselItems.children);
const nextButton = document.querySelector('.carousel_right');
const prevButton = document.querySelector('.carousel_left');
const positionIndex = document.querySelector('.carousel_nav');
const dots = Array.from(positionIndex.children);

const slideWidth = slides[0].getBoundingClientRect().width;



const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (carouselItems, currentSlide, targetSlide) => {
  carouselItems.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === 0) {
        prevButton.classList.add('hide_button');
        nextButton.classList.remove('hide_button');
 
    } else if (targetIndex === slides.length -1) {
        prevButton.classList.remove('hide_button');
        nextButton.classList.add('hide_button');
    } else {
        prevButton.classList.remove('hide_button');
        nextButton.classList.remove('hide_button');
    }
}

//when i click left move to the left
prevButton.addEventListener('click', e => {
    const currentSlide = carouselItems.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = positionIndex.querySelector('.current_slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    moveToSlide(carouselItems, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex)
})
//when i click right move to the right
nextButton.addEventListener('click', e => {
    const currentSlide = carouselItems.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = positionIndex.querySelector('.current_slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
    moveToSlide(carouselItems, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex)
})
//when the user click on the points  move to that slide

positionIndex.addEventListener('click' , e => {
    //what indicator was clicked on

    const targetDot = e.target.closest('button');

    if(!targetDot) return;
    const currentSlide = carouselItems.querySelector('.current_slide');
    const currentDot = positionIndex.querySelector('.current_slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides [targetIndex];
    
    moveToSlide(carouselItems, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
   

})



