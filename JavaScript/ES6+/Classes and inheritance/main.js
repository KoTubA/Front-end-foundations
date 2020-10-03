import { Fish, Amphibians, Reptiles, Birds, Mammals } from './class.js';

document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector(".form-select"),
        allInput = document.querySelectorAll(".label-input-form"),
        close = document.querySelectorAll('.confirm-data-close'),
        overlay = document.querySelector('.animal-overlay'),
        add = document.querySelector('.add-animal'),
        form_add = document.querySelector('.animals-form-wrapper'),
        form = document.querySelector('#animals-form'),
        input_name = document.querySelector(".form-input-name"),
        input_weight = document.querySelector(".form-input-weight"),
        category_items = document.querySelectorAll('.animals-category'),
        animals_list = document.querySelector('.animals-list'),
        animals_list_data = document.querySelector('.animals-list-data'),
        animals_list_title = document.querySelector('.animals-list-title');

    let animals = {
        fish: [],
        amphibians: [],
        reptiles: [],
        birds: [],
        mammals: []
    };

    select.addEventListener("change", (e) => {
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

    for (let i of close) {
        i.addEventListener('click', () => {
            overlay.classList.remove('item-visible');
            form_add.classList.remove('item-visible');
            animals_list.classList.remove('item-visible');
            animals_list_data.innerHTML = "";
        });
    }

    overlay.addEventListener('click', () => {
        overlay.classList.remove('item-visible');
        form_add.classList.remove('item-visible');
        animals_list.classList.remove('item-visible');
        animals_list_data.innerHTML = "";
    });

    add.addEventListener('click', () => {
        overlay.classList.add('item-visible');
        form_add.classList.add('item-visible');
    });


    function toogleOverlay() {
        overlay.classList.toggle('item-visible');
        form_add.classList.toggle('item-visible');
    }

    //Form validation
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formErrors = [];

        if (input_name.value == "" || input_name.value == null) {
            formErrors.push(".form-input-name");
        }
        if (input_weight.value == "" || input_weight.value == null) {
            formErrors.push(".form-input-weight");
        }

        if (!formErrors.length) {
            if (select.value == "fish") {
                let input_immersion_depth = document.querySelector(".form-input-immersion-depth").value;

                animals.fish.push(new Fish(input_immersion_depth, input_name.value, input_weight.value));
            }
            else if (select.value == "amphibians") {
                let input_food = document.querySelector(".form-input-food").value;

                animals.amphibians.push(new Amphibians(input_food, input_name.value, input_weight.value));
            }
            else if (select.value == "reptiles") {
                let input_group = document.querySelector(".form-input-group").value;

                animals.reptiles.push(new Reptiles(input_group, input_name.value, input_weight.value));
            }
            else if (select.value == "birds") {
                let input_wingspan = document.querySelector(".form-input-wingspan").value;

                animals.birds.push(new Birds(input_wingspan, input_name.value, input_weight.value));
            }
            else if (select.value == "mammals") {
                let input_occurrence = document.querySelector(".form-input-occurrence").value;

                animals.mammals.push(new Mammals(input_occurrence, input_name.value, input_weight.value));
            }
            //Clear data and hide form
            this.reset();
            for (let items of allInput) {
                items.classList.remove('item-visible');
            }
            toogleOverlay();
        }
        else {
            for (let i of formErrors) {
                document.querySelector(i).classList.add('form-control-invalid');
            }
        }
    });

    //Remove error message
    input_name.addEventListener('focus', function () { this.classList.remove('form-control-invalid') });
    input_weight.addEventListener('focus', function () { this.classList.remove('form-control-invalid') });

    //Show data list
    category_items.forEach((item) => {
        let fragment = document.createDocumentFragment();
        item.addEventListener('click', () => {
            overlay.classList.add('item-visible');
            animals_list.classList.add('item-visible');

            let id = item.id;
            animals_list_title.innerText = id;

            //Header
            let mainproperty = document.querySelectorAll(`.label-input-all > input`);
            let property = document.querySelectorAll(`.label-input-${id} > input`);
            let header = document.createElement('div');
            header.classList.add('animals-data-header');

            let row = document.createElement('div');
            let textHeader = '';

            //Global properties
            for (let maintitle of mainproperty) {
                textHeader += `<div class="animals-data">${maintitle.placeholder}</div>`;
            }

            //Unique properties
            for (let title of property) {
                textHeader += `<div class="animals-data">${title.placeholder}</div>`;
            }

            row.classList.add('animals-data-row');
            row.innerHTML = textHeader;
            header.appendChild(row);
            fragment.appendChild(header);

            //Table cnt
            let data_cnt = document.createElement('div');
            data_cnt.classList.add('animals-data-cnt');

            for (let object in animals[id]) {
                let div = document.createElement('div');
                div.classList.add('animals-data-row')
                div.innerHTML = animals[id][object].showData();
                data_cnt.appendChild(div);
            }

            fragment.appendChild(data_cnt);
            animals_list_data.appendChild(fragment);
        });
    });
});