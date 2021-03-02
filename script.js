"use strict";
// Находим кнопку
let btn = document.querySelector(".btn");
// Устанавливаем обработчик события
btn.addEventListener("click", function(event) {
    event.preventDefault();

    window.fetch("/data.json")
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(response) {
            document.querySelector(".project").innerHTML = response.project;
            document.querySelector(".course").innerHTML = response.course;
            document.querySelector(".module").innerHTML = response.module;
            document.querySelector(".teacher").innerHTML = response.teacher;
        });
});


// https://tproger.ru/books/cpp-books-beginners/