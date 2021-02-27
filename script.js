"use strict";
// Находим кнопку
let btn = document.querySelector(".btn");
// Устанавливаем обработчик события
btn.addEventListener("click", function(event) {
    event.preventDefault();
// Создаем новый экземпляр запроса
    let request = new XMLHttpRequest();
//Создаем еще один обработчик
    request.onload = function() {
        // В момент когда от сервера придёт ответ
        let text = request.responseText;
        document.querySelector(".text").innerHTML = text;
    };
// Открываем соединение и отправляем запрос
    request.open("GET", "/data.txt");
    request.send();
});