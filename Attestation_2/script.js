'use strict';

const input = document.querySelector('.login-email__input')
const password = document.querySelector('.login-password__input')
const password2 = document.querySelector('.login-confirm__input')

const error = document.querySelector('.login-email__error')
const error1 = document.querySelector('.login-email__error2')
const error2 = document.querySelector('.login-password__error')
const error3 = document.querySelector('.login-password__error2')
const error4 = document.querySelector('.login-confirm__error')

const button = document.querySelector('.login-submit__input')

button.addEventListener('click', (event) => {
event.preventDefault();
validateEmail(input.value);

if (!input.value) {
    input.classList.add('red')
    input.classList.remove('white');
    error1.classList.add('show');
    error.classList.remove('show')
}else

if (validateEmail(input.value)) {
    input.classList.add('white')
    input.classList.remove('red');
    error.classList.remove('show');
    error1.classList.remove('show');

}else {
    input.classList.remove('white');
    input.classList.add('red')
    error.classList.add('show')
    error1.classList.remove('show');
}

let pass = password.value;

if (!pass) {
    password.classList.add('red')
    password.classList.remove('white');
    error2.classList.add('show');
    error3.classList.remove('show')
}else

if (pass.length < 8) {
    password.classList.add('red')
    password.classList.remove('white');
    error2.classList.remove('show');
    error3.classList.add('show')
}else {
    password.classList.remove('red')
    password.classList.add('white');
    error2.classList.remove('show');
    error3.classList.remove('show');
}

let pass2 = password2.value; 

if ((pass2 !== pass) || !pass2){
        password2.classList.add('red')
        password2.classList.remove('white');
        error4.classList.add('show')
    }else {
        password2.classList.remove('red')
        password2.classList.add('white');
        error4.classList.remove('show');
}

if (validateEmail(input.value) === true && pass.length >= 8 && pass === pass2) {
    validTest();
}

function validTest() {
    const test = Object();
    test.email = input.value;
    test.pass = pass;
    console.log(test);
    return;
}

});

function validateEmail(email) { 
    console.log(email);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()))
    return re.test(String(email).toLowerCase());
}