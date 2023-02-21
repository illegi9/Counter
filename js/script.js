'use strict'

let counterField = document.querySelector('.main--counter');
let counterStart = document.querySelector('.main--btn_add');
let counterEnd = document.querySelector('.main--btn_stop');
let count = 0;

counterStart.focus();

counterStart.addEventListener('click',
function () {
    count += 1;
    
    counterField.textContent = count;
    if(counterField.textContent == 2000) { 
        counterField.textContent = 0;
        count = 0;
    }
});
// Прибавляем 1 по нажатию на кнопку
// При счете 2000 поле с цифрой обнуляется и отсчет идет сначала

counterEnd.addEventListener('click', 
function () {
    counterField.textContent = 0;
    count = 0;
});
// Очищаем поле с цифрой, следующее нажатие на кнопку Плюс начнет счет сначала