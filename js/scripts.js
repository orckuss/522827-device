// JavaScript Document
var link = document.querySelector(".contacts .btn");
var popup = document.querySelector(".modal-feedback");
var popup_close = popup.querySelector(".modal-close");
var form = popup.querySelector(".feedback");
var form_name = form.querySelector("#name");
var form_email = form.querySelector("#email");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  form_name.focus();
});
form.addEventListener("submit", function(evt) {
  if (!form_name.value || !form_email.value) {
    evt.preventDefault();
  }
});
popup_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
