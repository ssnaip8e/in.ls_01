
// переход от первой кнопки к каталогу по id
// добавление скролл для плавности
document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

// в переменной хранятся все кнопки под классом .car-button
var buttons = document.getElementsByClassName("car-button");
// переход из под каталога по кнопке к форме по id
// добавление цикла по всем кнопкам
// добавление скролл для плавности
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

// валидация формы при помощи условия
document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert ("Заполните поле имя!")
    } else if (document.getElementById("phone").value === "") {
        alert ("Заполните поле телефон!")
    } else if (document.getElementById("car").value === "") {
        alert ("Заполните поле автомобиль!")
    } else {
        alert("Спасибо за заявку. Мы свяжемся с вами в ближайшее время!")
    }
}

// добавление анимации для последнего автомобиля
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });
// добавление анимации для первого автомобиля
    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        // elem.style.backgroundPositionX = '0' + (0.1 * window.pageYOffset) + 'px';
        elem.style.backgroundPositionX = '0' + (0.1 * window.scrollY) + 'px';
    })
});