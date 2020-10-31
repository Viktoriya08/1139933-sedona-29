const choiceButton=document.querySelector(".choice-button"),modalPopup=document.querySelector(".modal"),form=modalPopup.querySelector(".modal-search"),arrival=modalPopup.querySelector(".data-arrival"),departure=modalPopup.querySelector(".data-departure"),parents=modalPopup.querySelector(".parents"),children=modalPopup.querySelector(".children");let isStorageSupport=!0,storageParents="",storageChildren="";try{storageParents=localStorage.getItem("parents")}catch(e){isStorageSupport=!1}try{storageChildren=localStorage.getItem("children")}catch(e){isStorageSupport=!1}choiceButton.addEventListener("click",function(e){e.preventDefault(),modalPopup.classList.contains("modal-hidden")?(modalPopup.classList.remove("modal-hidden"),modalPopup.classList.remove("modal-error")):modalPopup.classList.add("modal-hidden")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(modalPopup.classList.contains("modal-hidden")?(modalPopup.classList.remove("modal-hidden"),modalPopup.classList.remove("modal-error")):(e.preventDefault(),modalPopup.classList.add("modal-hidden")))}),form.addEventListener("submit",function(e){arrival.value&&departure.value&&parents.value&&children.value?isStorageSupport&&(localStorage.setItem("children",children.value),localStorage.setItem("parents",parents.value)):(e.preventDefault(),modalPopup.classList.remove("modal-error"),modalPopup.offsetWidth=modalPopup.offsetWidth,modalPopup.classList.add("modal-error"))});