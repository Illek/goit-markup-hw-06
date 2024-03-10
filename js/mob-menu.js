// Получаем ссылки на кнопки открытия и закрытия модального окна
var openMobBtn = document.getElementById("open-mob-menu");
var closeMobBtn = document.getElementById("mob-close");
var mobMenu = document.querySelector(".mobile-menu");

// Добавляем обработчик события для кнопки открытия модального окна
openMobBtn.addEventListener("click", function () {
  mobMenu.classList.add("is-open");
});

// Добавляем обработчик события для кнопки закрытия модального окна
closeMobBtn.addEventListener("click", function () {
  mobMenu.classList.remove("is-open");
});
