const choiceButton = document.querySelector(".choice-button");
const modalPopup = document.querySelector(".modal");
const form = modalPopup.querySelector (".modal-search");
const arrival = modalPopup.querySelector (".data-arrival");
const departure = modalPopup.querySelector (".data-departure");
const parents = modalPopup.querySelector (".parents");
const children = modalPopup.querySelector (".children");

/* const storageChildren = localStorage.getItem("children"); */

let isStorageSupport = true;
let storageParents = "";
let storageChildren = "";

try {
    storageParents = localStorage.getItem("parents");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storageChildren = localStorage.getItem("children");
  } catch (err) {
    isStorageSupport = false;
  }

choiceButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!modalPopup.classList.contains("modal-hidden")){
    modalPopup.classList.add("modal-hidden");
    } else {
        modalPopup.classList.remove("modal-hidden");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!modalPopup.classList.contains("modal-hidden")) {
        evt.preventDefault();
        modalPopup.classList.add("modal-hidden");
      } else {
        modalPopup.classList.remove("modal-hidden");
      }
    }
  });

form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !parents.value || !children.value) {
        evt.preventDefault();
      }  else {
        if (isStorageSupport) {
        localStorage.setItem("children", children.value);
        localStorage.setItem("parents", parents.value);
        }
      }
});

