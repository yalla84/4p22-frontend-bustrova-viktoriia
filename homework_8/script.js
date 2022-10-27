'use strict';

const button = document.getElementById('expression');

button.addEventListener('click', function () {
    
let result;
const num1 = Number(document.getElementById('num1').value);
const num2 = Number(document.getElementById('num2').value);
const operator = document.getElementById('operator').value;

        switch(operator) {
            case '':
                result = 'Знак не введен';
                break;
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break; 
            default: 
                result = 'Программа не поддерживает такую операцию';
                break; 
        };

if (num1 == '') {result = 'Первое число не указано';};
if (num2 == '') {result = 'Второе число не указано';};
if (isNaN(num1) || isNaN(num2)) {result = 'Некорретный ввод чисел';};
//if ((num2 == 0) && (operator == '/')) {result = 'Операция некорректна';};

console.log(result)
document.getElementById('result').innerHTML = result;
});



