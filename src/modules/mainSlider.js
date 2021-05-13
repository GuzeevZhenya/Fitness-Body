const mainSlider = () => {
    const mainSlider = document.querySelector('.main-slider'), //блок главного слайдера
        slides = mainSlider.querySelectorAll('.slide'); //коллекция всех слайдов

    let currentSlide = 0, //значение текущего слайда
        interval;

    const autoPlaySlide = () => {
        slides[currentSlide].style.display = 'none';
        currentSlide++

        if (currentSlide > slides.length) {
            currentSlide = 0;
        }
        slides[currentSlide].style.display = 'flex';
    };

    const startSlide = () => {
        setInterval(autoPlaySlide, 2000);
    }

    startSlide();
}

export default mainSlider;