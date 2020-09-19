document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('.load-data'),
        container = document.querySelector('.status-cnt');

    button.addEventListener('click', () => {
        let request = new XMLHttpRequest();
        let fragment = document.createDocumentFragment();
        container.innerHTML = "";

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 1) {
                let status_wrapper = document.createElement('div'),
                    status_icon = document.createElement('img'),
                    status = document.createElement('div');

                status_wrapper.classList.add('status-wrapper', 'status-wrapper-1');

                status_icon.classList.add('status-icon', 'status-icon-1');
                status_icon.src = "img/iconfinder_Clock_381590.png";

                status.innerText = "Loading user data";
                status.classList.add('status-1');

                status_wrapper.appendChild(status_icon);
                status_wrapper.appendChild(status);
                fragment.appendChild(status_wrapper);

                container.appendChild(fragment);
            }
            else if (request.readyState === 4 && request.status === 200) {
                document.querySelector('.status-icon-1').src = "img/iconfinder_Complete_Symbol_381607.png";
                console.log(request.response);
            }
            else if (request.readyState === 4) {
                document.querySelector('.status-icon-1').src = "img/iconfinder_Incorrect_Symbol_381610.png";
            }
        });

        request.open("GET", 'https://jsonplaceholder.typicode.com/users/1');
        request.send();

    });
});