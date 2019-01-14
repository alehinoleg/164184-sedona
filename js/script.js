var button = document.querySelector(".button");
var popup = document.querySelector(".modal-search");
var focusinput = popup.querySelector(".dates");
var dates1 = popup.querySelector(".dates1");
var adults = popup.querySelector(".adults-in");
var adults1 = popup.querySelector(".adults-in-js")
var form = popup.querySelector(".modal-form");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
  /*focusinput.focus();*/
  /*console.log("Клик по ссылке вход");*/
})

form.addEventListener("submit", function (evt) {
  if (!focusinput.value || !dates1.value || !adults.value || adults1.value){
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.clientWidth;
      popup.classList.add("modal-error");
      /*console.log("Работает");*/
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");

    }
  }
});

popup.classList.remove("modal-show");
