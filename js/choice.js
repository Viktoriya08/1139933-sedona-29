const choiceButton = document.querySelector(".choice-button");
const modalPopup = document.querySelector(".modal");

choiceButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        modalPopup.classList.remove("modal-show");
      }
    }
  });

   choiceButton.addEventListener("click", function (evt) {
    if (modalPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        modalPopup.classList.remove("modal-show");
      }
});