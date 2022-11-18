'use strict';

const input = document.querySelector('.login-email__input')
const password = document.querySelector('.login-password__input')
const error = document.querySelector('.login-email__error')
const error2 = document.querySelector('.login-password__error')
const button = document.querySelector('.login-submit__input')

button.addEventListener('click', (e) => {
e.preventDefault();

function validateEmail(email) { 
    console.log(email);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()))
    return re.test(String(email).toLowerCase());
}

if (validateEmail(input.value)) {
    input.classList.add('white')
    input.classList.remove('red');
    error.classList.remove('show');
}else {
    input.classList.remove('white');
    input.classList.add('red')
    error.classList.add('show')
}

if (!password.value) {
    password.classList.add('red')
    password.classList.remove('white');
    error2.classList.add('show');
}else {
    password.classList.remove('red')
    password.classList.add('white');
    error2.classList.remove('show');
}
});

