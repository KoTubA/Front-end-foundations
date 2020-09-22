document.addEventListener("DOMContentLoaded", () => {
    let slider_previous_button = document.querySelector('.weather-data-daily-previous-button'),
        slider_next_button = document.querySelector('.weather-data-daily-next-button'),
        weather_data_daily_slider = document.querySelector('.weather-data-daily-slider'),
        search_from = document.querySelector("#search-form"),
        weather_search = document.querySelector('.weather-search'),
        weather_cnt = document.querySelector('.weather-cnt'),
        form_input = document.querySelector('.form-input');

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

    search_from.addEventListener('submit', (e) => {
        e.preventDefault();

        try {
            if (form_input.value !== "") {
                //Fetch API ... then:

                weather_search.style.visibility = "hidden";
                weather_cnt.style.visibility = "visible";
            }
            else {
                throw new Error('Field cannot be empty');
            }
        }
        catch (error) {
            weather_search.classList.add('error');
            document.querySelector('.error-message').innerText = error.message;
        }

    });

    form_input.addEventListener('focus', () => {
        weather_search.classList.remove('error');
    });

});