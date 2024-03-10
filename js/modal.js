// Получаем ссылки на кнопки открытия и закрытия модального окна
var openModalBtn = document.getElementById("open-modal-btn");
var closeModalBtn = document.getElementById("close-modal-btn");
var backdrop = document.querySelector(".backdrop");

// Добавляем обработчик события для кнопки открытия модального окна
openModalBtn.addEventListener("click", function () {
  backdrop.classList.add("is-open");
});

// Добавляем обработчик события для кнопки закрытия модального окна
closeModalBtn.addEventListener("click", function () {
  backdrop.classList.remove("is-open");
});
