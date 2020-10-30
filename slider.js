const slider = $('.product').bxSlider({
    pager: false,
    controls: false
});

$('.product-slider__arrow-left').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
    
})

$('.product-slider__arrow-right').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})