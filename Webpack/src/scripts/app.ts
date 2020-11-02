import '../index.html';
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const nav_toggler = document.querySelector('.nav-toggler'),
        nav_list = document.querySelector('.nav-list'),
        overlay = document.querySelector('.overlay'),
        form = document.querySelector('.footer-section-form-cnt'),
        form_email = document.querySelector('#email');


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

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (!re.test(email)) {
            form.classList.add('invalid-data');
        }
    });

    //Remove the alert when clicking on input
    form_email?.addEventListener('focus', () => {
        form?.classList.remove('invalid-data');
    });

});