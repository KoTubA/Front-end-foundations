import '../index.html';
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const nav_toggler = document.querySelector('.nav-toggler'),
        nav_list = document.querySelector('.nav-list'),
        overlay = document.querySelector('.overlay'),
        form = document.querySelector('.footer-section-form-cnt'),
        form_email = document.querySelector('#email'),
        slider_wrapper = document.querySelector('.slider-card-wrapper'),
        dots_slider = document.querySelectorAll('.dots-slider');

    //Navigation
    nav_toggler?.addEventListener('click', function (this: typeof nav_toggler) {
        (nav_list?.classList.contains('nav-list-visible')) ? (nav_list.classList.remove('nav-list-visible'), overlay?.classList.remove('overlay-visible'), this.classList.remove('nav-toggler-visible')) : (nav_list?.classList.add('nav-list-visible'), overlay?.classList.add('overlay-visible'), this.classList.add('nav-toggler-visible'));
    });

    overlay?.addEventListener('click', function (this: typeof overlay) {
        nav_list?.classList.remove('nav-list-visible');
        this.classList.remove('overlay-visible');
        nav_toggler?.classList.remove('nav-toggler-visible');
    });

    //Form
    form?.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = (document.querySelector('#email') as HTMLTextAreaElement).value;

        const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (!reg.test(email)) {
            form.classList.add('invalid-data');
        }
    });

    //Remove the alert when clicking on input
    form_email?.addEventListener('focus', () => {
        form?.classList.remove('invalid-data');
    });

    //Slider
    let counter = 2;

    function changeSlide() {
        const slider_card = document.querySelectorAll('.slider-card');
        const slider_length = slider_card.length;

        //Margin left and right card element
        const style = window.getComputedStyle(slider_card[0]);

        const card_width = slider_card[0].clientWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight)

        //slider_wrapper.style.transform = `translateX(-${counter * card_width}px)`;
        slider_wrapper?.appendChild(slider_card[0]);

        dots_slider.forEach(ele => ele.classList.remove("dots-active"));

        dots_slider[counter].classList.add("dots-active");

        (counter < slider_length - 1) ? counter++ : counter = 0;

    }

    let slider = setInterval(changeSlide, 5000);

});