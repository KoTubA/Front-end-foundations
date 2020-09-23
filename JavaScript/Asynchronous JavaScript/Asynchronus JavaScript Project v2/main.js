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
        key: "dBubabeKLSsr5h6p4Fur42E71rXVLJ6j",
        url: "http://dataservice.accuweather.com/"
    }

    search_from.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form_input.value !== "") {
            //Fetch API ... then:

            fetch(api.url + "/locations/v1/cities/search?apikey=" + api.key + "&q=" + form_input.value)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    else {
                        throw new Error("Error: " + response.status);
                    }
                })
                .then((data) => {
                    if (data.length === 0) {
                        throw new Error("No results found");
                    }
                    else if (data.length === 1) {
                        //TODO
                    }
                    else {
                        showResult(data);
                    }
                    error_message.innerText = "";
                })
                .catch((error) => {
                    error_message.innerText = error.message;
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
        let fragment = document.createDocumentFragment();
        let fragment_title = document.createElement('p');
        fragment_title.classList.add('weather-search-result-title');
        fragment_title.innerText = "Result:"

        fragment.appendChild(fragment_title);

        for (obj of data) {
            let location_item = document.createElement('div');
            location_item.classList.add('weather-search-result-item');
            location_item.dataset.key = obj.Key;
            location_item.innerText = obj.LocalizedName + ", " + obj.SupplementalAdminAreas[0].LocalizedName + ", " + obj.Country.ID;

            location_item.addEventListener('click', showWeather)

            fragment.appendChild(location_item);
        }

        weather_search_result.appendChild(fragment);

        weather_search.style.visibility = "hidden";
        weather_search_result.style.visibility = "visible";
    }


    function showWeather() {
        fetch(api.url + "/forecasts/v1/daily/15day/" + this.getAttribute("data-key") + "?apikey=" + api.key)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error("Error: " + response.status);
                }
            })
            .then((data) => {
                weather_search_result.style.visibility = "hidden";
                weather_cnt.style.visibility = "visible";
                console.log(data);
            })
            .catch((error) => {
                error_message.innerText = error.message;
            })
    }

});