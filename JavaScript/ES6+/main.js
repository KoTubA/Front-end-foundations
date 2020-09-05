document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('.btn-primary'),
        select = document.querySelector(".form-select"),
        close = document.querySelector('.confirm-data-close'),
        overlay = document.querySelector('.animal-overlay'),
        add = document.querySelector('.add-animal'),
        form = document.querySelector('.animals-add-form');


    select.addEventListener("change", (e) => {
        let allInput = document.querySelectorAll(".label-input-form");
        for (let items of allInput) {
            items.classList.remove('item-visible');
        }


        if (event.target.value != "") {
            let categorySettings = document.querySelectorAll(".label-input-all, .label-input-" + event.target.value);
            document.querySelector('.btn-primary').classList.add("item-visible");

            for (let ele of categorySettings) {
                ele.classList.add('item-visible');
            }
        }
    });

    close.addEventListener('click', toogleOverlay);
    overlay.addEventListener('click', toogleOverlay);
    add.addEventListener('click', toogleOverlay);


    function toogleOverlay() {
        overlay.classList.toggle('item-visible');
        form.classList.toggle('item-visible');
    }

    button.addEventListener('click', (e) => {
        e.preventDefault();
        toogleOverlay();
    })
});

//Class

class Animal {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
    }
}

class Fish extends Animal {
    constructor(immersion_depth, ...param) {
        super(...param);
        this.immersion_depth = immersion_depth;
    }
}