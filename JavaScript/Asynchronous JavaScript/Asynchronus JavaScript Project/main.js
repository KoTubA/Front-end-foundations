document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('.load-data'),
        container = document.querySelector('.status-cnt'),
        i = 0;

    button.addEventListener('click', () => {
        //Reset iteration
        i = 0;
        container.innerHTML = "";

        //Callback Hell
        getData("https://jsonplaceholder.typicode.com/users", "Loading users data", (status, data) => {
            if (status) {
                console.log(data);

                getData("https://jsonplaceholder.typicode.com/posts", "Loading posts data", (status, data) => {
                    if (status) {
                        console.log(data);

                        getData("https://jsonplaceholder.typicode.com/comments", "Loading comments data", (status, data) => {
                            if (status) {
                                console.log(data);
                            }
                        });
                    }
                });
            }
        });
    });

    function getData(url, text, callback) {
        i++;
        let request = new XMLHttpRequest();
        let fragment = document.createDocumentFragment();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 1) {
                let status_wrapper = document.createElement('div'),
                    status_icon = document.createElement('img'),
                    status = document.createElement('div');

                status_wrapper.classList.add('status-wrapper', 'status-wrapper-' + i);

                status_icon.classList.add('status-icon', 'status-icon-' + i);
                status_icon.src = "img/iconfinder_Clock_381590.png";

                status.innerText = text;
                status.classList.add('status-' + i);

                status_wrapper.appendChild(status_icon);
                status_wrapper.appendChild(status);
                fragment.appendChild(status_wrapper);

                container.appendChild(fragment);
            }
            else if (request.readyState === 4 && request.status === 200) {
                document.querySelector('.status-icon-' + i).src = "img/iconfinder_Complete_Symbol_381607.png";
                callback(true, request.response);
            }
            else if (request.readyState === 4) {
                document.querySelector('.status-icon-' + i).src = "img/iconfinder_Incorrect_Symbol_381610.png";
                callback(false, undefined);
            }
        });

        request.open("GET", url);
        request.send();
    }
});