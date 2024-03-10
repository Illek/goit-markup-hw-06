var openModalBtn = document.getElementById("open-modal-btn");
var closeModalBtn = document.getElementById("close-modal-btn");
var backdrop = document.querySelector(".backdrop");

openModalBtn.addEventListener("click", function () {
  backdrop.classList.add("is-open");
});

// Close out of modal window

closeModalBtn.addEventListener("click", function () {
  backdrop.classList.remove("is-open");
});

closeModalBtn.addEventListener("click", function () {
  backdrop.classList.remove("is-open");
});

window.addEventListener("click", function (event) {
  if (event.target === backdrop) {
    backdrop.classList.remove("is-open");
  }
});
