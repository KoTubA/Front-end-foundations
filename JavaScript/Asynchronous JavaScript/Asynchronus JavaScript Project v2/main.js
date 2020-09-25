document.addEventListener("DOMContentLoaded", () => {
    const slider_previous_button = document.querySelector('.weather-data-daily-previous-button'),
        slider_next_button = document.querySelector('.weather-data-daily-next-button'),
        weather_data_daily_slider = document.querySelector('.weather-data-daily-slider'),
        search_from = document.querySelector("#search-form"),
        weather_search = document.querySelector('.weather-search'),
        weather_cnt = document.querySelector('.weather-cnt'),
        form_input = document.querySelector('.form-input'),
        error_message = document.querySelector('.error-message'),
        loader = document.querySelector('.loader'),
        weather_background = document.querySelector('.weather-background'),
        confirm_data_close = document.querySelector('.confirm-data-close');

    const weather_data_main_status = document.querySelector('.weather-data-main-status'),
        weather_data_main_location = document.querySelector('.weather-data-main-location'),
        weather_data_main_temp = document.querySelector('.weather-data-main-temp'),
        weather_data_main_humidity = document.querySelector('.weather-data-main-humidity'),
        weather_data_main_pressure = document.querySelector('.weather-data-main-pressure'),
        weather_data_main_cloudiness = document.querySelector('.weather-data-main-cloudiness'),
        weather_data_main_wind_speed = document.querySelector('.weather-data-main-wind-speed'),
        weather_data_main_time = document.querySelector('.weather-data-main-time'),
        weather_data_main_icon = document.querySelector('.weather-data-main-icon');

    slider_previous_button.addEventListener('click', () => { move(false) });
    slider_next_button.addEventListener('click', () => { move(true) });

    let i = 0;
    const visible_elements = 8;

    function move(status) {
        //Screen resize protection
        const weather_data_daily = document.querySelector('.weather-data-daily').clientWidth;

        if (status) { (i === visible_elements) ? i = 0 : i++; }
        else { (i === 0) ? i = visible_elements : i--; }
        weather_data_daily_slider.style.transform = "translateX(-" + weather_data_daily * i + "px)";
    }

    const api = {
        key: "dd9c76de28a7dee3d4a4dbe15ddd5933",
        url: "http://api.openweathermap.org/data/2.5/",
        days: 16,
        units: "metric"
    }

    search_from.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form_input.value !== "") {

            loader.style.visibility = "visible";
            weather_search.style.visibility = "hidden";

            Promise.all([fetch(api.url + "weather?q=" + form_input.value + "&appid=" + api.key + "&units=" + api.units), fetch(api.url + "forecast?q=" + form_input.value + "&cnt=" + api.days + "&appid=" + api.key + "&units=" + api.units)])
                .then(async ([currentData, forecastData]) => {
                    const dailyData = await currentData.json();
                    const hourData = await forecastData.json();
                    return [dailyData, hourData];
                })
                .then((data) => {
                    showResult(data);
                })
                .catch((error) => {
                    error_message.innerText = "Error: " + error.message;
                    loader.style.visibility = "hidden";
                    weather_search.style.visibility = "visible";
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

        //Current weather data
        const { weather: [{ main: currentWeather, icon: currentIcon }], main: { temp: currentTemp, pressure: currentPressure, humidity: currentHumidity }, wind: { speed: currentWindSpeed }, clouds: { all: currentCloudiness }, name: cityName } = data[0];

        weather_background.innerHTML = setBackground(currentIcon);
        weather_data_main_icon.innerHTML = chooseIkone(currentIcon);
        weather_data_main_status.innerText = currentWeather;
        weather_data_main_location.innerText = cityName;
        weather_data_main_temp.innerText = Math.round(currentTemp) + " \u00B0C";
        weather_data_main_humidity.innerText = currentHumidity + "%";
        weather_data_main_pressure.innerText = currentPressure + "hPa";
        weather_data_main_cloudiness.innerText = currentCloudiness + "%";
        weather_data_main_wind_speed.innerText = currentWindSpeed + " km/h";

        //Data
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const date = new Date();
        const day = ("0" + date.getDate()).slice(-2);
        const mounth = monthNames[date.getMonth()];
        const year = date.getFullYear();

        weather_data_main_time.innerText = mounth + " " + day + ", " + year;

        //5 Day / 3 Hour Forecast
        let fragment = document.createDocumentFragment();
        for (obj of data[1].list) {
            const { dt: hourDate, weather: [{ icon: hourIcon }], main: { temp: hourTemp } } = obj;

            let wrapper = document.createElement('div');
            wrapper.classList.add('weather-data-daily');

            const hourData = new Date(hourDate * 1000);
            let hours = hourData.getHours();
            let ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;

            let title = document.createElement('div');
            title.classList.add('weather-data-daily-title');
            title.innerText = hours + ampm;

            let icon = document.createElement('div');
            icon.classList.add('weather-data-daily-icon');
            icon.innerHTML = chooseIkone(hourIcon);

            let temp = document.createElement('div');
            temp.classList.add('weather-data-daily-temp');
            temp.innerText = Math.round(hourTemp) + " \u00B0C";

            wrapper.appendChild(title);
            wrapper.appendChild(icon);
            wrapper.appendChild(temp);
            fragment.appendChild(wrapper);
        }

        weather_data_daily_slider.appendChild(fragment);

        loader.style.visibility = "hidden";
        weather_cnt.style.visibility = "visible";
    }

    function chooseIkone(icon) {
        return '<img src="img/icon/wi-' + icon + '.svg"/>';
    }

    //TODO
    function setBackground(status) {
        return '<img src="img/kumiko-shimizu-lNxMcE8mvIM-unsplash.jpg" alt="">';
        //return '<img src="img/icon/wi-' + status + '.svg"/>';
    }

    confirm_data_close.addEventListener('click', () => {
        weather_search.style.visibility = "visible";
        weather_cnt.style.visibility = "hidden";
    });

    confirm_data_close.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            weather_search.style.visibility = "visible";
            weather_cnt.style.visibility = "hidden";
        }
    });

});