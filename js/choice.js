const choiceButton = document.querySelector(".choice-button");
const modalPopup = document.querySelector(".modal");
const form = modal.querySelector (".modal-search");
const arrival = modal.querySelector (".data-arrival");
const departure = modal.querySelector (".data-departure");
const parents = modal.querySelector (".parents");
const children = modal.querySelector (".children");
const storageParents = localStorage.getItem("parents");
const storageChildren = localStorage.getItem("children");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("parents");
  } catch (err) {
    isStorageSupport = false;
  }

choiceButton.addEventListener("click", function (evt) {
    if (modalPopup.classList.contains("modal")){
        evt.preventDefault();
    modalPopup.classList.add("modal-hidden");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalPopup.classList.contains("modal")) {
        evt.preventDefault();
        modalPopup.classList.add("modal-hidden");
      }
    }
  });

form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !parents.value || !children.value) {
        evt.preventDefault();
      }  else {
        localStorage.setItem("children", children.value);
        localStorage.setItem("parents", parents.value);
      }
});

