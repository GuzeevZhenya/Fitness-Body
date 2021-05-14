import mainSlider from "./mainSlider";

const photoSliders = () => {
    const gallerySlider = document.querySelector('.gallery-slider'), //блок главного слайдера
        slides = gallerySlider.querySelectorAll('.slide'), //коллекция всех слайдов
        dots = document.querySelector('.slider-dots');
    let currentSlide = 0, //значение текущего слайда
        interval;

    //Добавление точек по количеству слайдов
    slides.forEach(() => {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dots.appendChild(dot);
    })
    dots.children[0].classList.add('slick-active');

    const dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none'; //функция для скрытия предыдущего слайда
    };

    const prevDot = (elem, index, strClass) => {
        elem[index].classList.remove(strClass); //функция для удаления класса у элемента
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex'; //функция для показа следующего слайда
    };

    const nextDot = (elem, index, strClass) => {
        elem[index].classList.add(strClass); //функция для добавления класса у элемента
    };


    const autoPlaySlide = () => {
        prevSlide(slides, currentSlide);
        prevDot(dot, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide);
        nextDot(dot, currentSlide, 'slick-active');
    };

    gallerySlider.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        prevSlide(slides, currentSlide);
        prevDot(dot, currentSlide, 'slick-active');

        if (target.matches('.next span img, .next span')) {
            currentSlide++;
        } else if (target.matches('.prev span img, .prev span')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        nextSlide(slides, currentSlide);
        nextDot(dot, currentSlide, 'slick-active');
    })
    //Запуск слайда
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    }

    //Остановка слайда
    const stopSlide = () => {
        clearInterval(interval);
    }

    gallerySlider.addEventListener('mouseover', event => {
        //при наведении мыши на кнопки или точки пагинации автопрокрутка останавливается
        if (event.target.matches('.slider-arrow span, span img, .dot')) {
            stopSlide();
        }
    });

    gallerySlider.addEventListener('mouseout', event => {
        //убрали мышь с кнопок или точек пагинации - автопрокрутка запускается
        if (event.target.matches('.slider-arrow span,span img,.dot')) {
            startSlide();
        }
    });


    startSlide();
}

export default photoSliders;