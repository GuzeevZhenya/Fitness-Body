import toggleClub from './modules/toggleClub'
import popupVisit from './modules/popupVisit'
import gift from './modules/gift'
import mainSlider from './modules/mainSlider'
import toggleMenu from './modules/toggleMenu'
import photoSliders from './modules/photoSliders'
import scrollingPage from './modules/scrollingPage';
import carousel from './modules/sliderCarousel';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import calculator from './modules/calculator';

toggleClub();
popupVisit();
gift();
mainSlider();
toggleMenu();
photoSliders();
scrollingPage();
//Слайдер карусель
carousel.init();
//Маска для инпутов с телефоном
maskPhone('[name=phone]');

//Отправка форм
sendForm();
calculator();