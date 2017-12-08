// JavaScript Document
var link = document.querySelector(".contacts .btn");
var popup = document.querySelector(".modal-feedback");
var popup_close = popup.querySelector(".modal-close");
var form = popup.querySelector(".feedback");
var form_name = form.querySelector("#name");
var form_email = form.querySelector("#email")

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  form_name.focus();
});

form.addEventListener("submit", function (evt) {
  if (!form_name.value || !form_email.value) {
    evt.preventDefault();
    console.log("bla bla bla");
  }
});

popup_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
