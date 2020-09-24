document.addEventListener("DOMContentLoaded", () => {
    let slider_previous_button = document.querySelector('.weather-data-daily-previous-button'),
        slider_next_button = document.querySelector('.weather-data-daily-next-button'),
        weather_data_daily_slider = document.querySelector('.weather-data-daily-slider'),
        search_from = document.querySelector("#search-form"),
        weather_search = document.querySelector('.weather-search'),
        weather_cnt = document.querySelector('.weather-cnt'),
        form_input = document.querySelector('.form-input'),
        error_message = document.querySelector('.error-message'),
        weather_search_result = document.querySelector('.weather-search-result');

    slider_previous_button.addEventListener('click', () => { move(false) });
    slider_next_button.addEventListener('click', () => { move(true) });

    let i = 0;
    let visible_elements = 8;

    function move(status) {
        //Screen resize protection
        let weather_data_daily = document.querySelector('.weather-data-daily').clientWidth;

        if (status) { (i === visible_elements) ? i = 0 : i++; }
        else { (i === 0) ? i = visible_elements : i--; }
        weather_data_daily_slider.style.transform = "translateX(-" + weather_data_daily * i + "px)";
    }

    const api = {
        key: "dd9c76de28a7dee3d4a4dbe15ddd5933",
        url: "http://api.openweathermap.org/data/2.5/",
        days: 1
    }

    search_from.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form_input.value !== "") {

            Promise.all([fetch(api.url + "weather?q=" + form_input.value + "&appid=" + api.key), fetch(api.url + "forecast?q=" + form_input.value + "&cnt=16&appid=" + api.key)])
                .then(async ([currentData, forecastData]) => {
                    return [currentData.json(), forecastData.json()];
                })
                .then((data) => {
                    showResult(data);
                })
                .catch((error) => {
                    error_message.innerText = "Error: " + error.message;
                })
        }
        else {
            weather_search.classList.add('error');
            error_message.innerText = "Field cannot be empty"
        }

    });

    form_input.addEventListener('focus', () => {
        weather_search.classList.remove('error');
    });


    function showResult(data) {
        console.log(data);

        error_message.innerText = "";

        //TODO

        /*
        let fragment = document.createDocumentFragment();
        let fragment_title = document.createElement('p');
        fragment_title.classList.add('weather-search-result-title');
        fragment_title.innerText = "Result:"

        fragment.appendChild(fragment_title);

        for (obj of data) {

        }

        weather_search_result.appendChild(fragment);

        weather_search.style.visibility = "hidden";
        weather_search_result.style.visibility = "visible";
        */
    }

});