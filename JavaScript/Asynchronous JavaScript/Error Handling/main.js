document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('#form'),
        form_control = document.querySelector('.form-control'),
        input_error = document.querySelector('#input-error'),
        message_info = document.querySelector('.message-info'),
        message_cnt = document.querySelector('.message-cnt'),
        confirm_data_close = document.querySelector('.confirm-data-close');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        form_control.classList.remove('error');
        message_cnt.classList.remove('message-visible', 'incorrect-message', 'correct-message');

        try {

            if (input_error.value == '') {
                throw new Error('Field cannot be empty');
            }
            else if (input_error.value.length < 5) {
                throw new Error('Minimum length is 5 characters')
            }
            else {
                message_info.innerText = "Data is correct";
                message_cnt.classList.add('correct-message');
            }

        }
        catch (error) {
            message_info.innerText = error.message;
            form_control.classList.add('error');
            message_cnt.classList.add('incorrect-message');
        }
        finally {
            message_cnt.classList.add('message-visible');
        }
    });

    input_error.addEventListener('focus', () => form_control.classList.remove('error'));
    confirm_data_close.addEventListener('click', () => message_cnt.classList.remove('message-visible', 'incorrect-message', 'correct-message'));
    confirm_data_close.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            message_cnt.classList.remove('message-visible', 'incorrect-message', 'correct-message');
        }
    });
});