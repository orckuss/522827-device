// JavaScript Document
function openClosePopup (link, close, popup) {
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 && popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  });  
}

var formLink = document.querySelector(".contacts .btn");
var formPopup = document.querySelector(".modal-feedback");
var formClose = formPopup.querySelector(".modal-close");
var form = formPopup.querySelector(".feedback");
var formName = form.querySelector("#name");
var formEmail = form.querySelector("#email");

openClosePopup(formLink, formClose, formPopup);
formLink.addEventListener("click", function(){
  formName.focus();
});
form.addEventListener("submit", function(evt) {
  if (!formName.value || !formEmail.value) {
    evt.preventDefault();
  }
});

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

openClosePopup(mapLink, mapClose, mapPopup);

function findCurrentSlide (slider, variableClass) {
  var currentSlide = 0;
  for (var i = 0; i < slider.length; i++) {
    if (slider[i].classList.contains(variableClass)) {
      currentSlide = i;
    }
  }
  return currentSlide;
}

function setNextSlideNumber (slider, variableClass) {
  var nextSlide = 0;
  var currentSlide = findCurrentSlide(slider, variableClass);
  if (currentSlide !== slider.length - 1) {
    nextSlide = currentSlide + 1;
  }
  return nextSlide;
}

var promoSliderAnimation = function (slider) {
  var slides = slider.querySelectorAll('.promo-item');
  var slideBtn = slider.querySelectorAll('.promo-toggle');
  
  function showSlide (num) {
    var currentNum = findCurrentSlide(slideBtn, 'promo-toggle-active');
    if (num !== currentNum) {
      var moreInfo = slides[num].querySelector('.btn');
      moreInfo.tabIndex = 0;
      moreInfo = slides[currentNum].querySelector('.btn');
      moreInfo.tabIndex = -1;
      slideBtn[num].classList.add('promo-toggle-active');
      slideBtn[currentNum].classList.remove('promo-toggle-active');
      slides[num].classList.remove('visual-hidden');
    }
    if (num > currentNum) {
      slides[num].classList.add('promo-item-toLeft');
      slides[currentNum].classList.add('promo-item-toLeft');
      setTimeout(function () {
        slides[num].classList.remove('promo-item-toLeft');
        slides[currentNum].classList.remove('promo-item-toLeft');
        slides[currentNum].classList.add('visual-hidden');
      }, animationSpeed);
    } else if (num < currentNum) {
      slides[num].classList.add('promo-item-toRight');
      slides[currentNum].classList.add('promo-item-toRight');
      setTimeout(function () {
        slides[num].classList.remove('promo-item-toRight');
        slides[currentNum].classList.remove('promo-item-toRight');
        slides[currentNum].classList.add('visual-hidden');
      }, animationSpeed);
    }
  }
  
  function setSlide (num) {
    return function () {
      showSlide(num);
      clearInterval(idInterval);
    };
  }
  
  function switchSlide () {
    showSlide(setNextSlideNumber(slideBtn, 'promo-toggle-active'));
  }
  
  var idInterval = setInterval(function(){switchSlide();}, slideTime);
  
  for (var i = 0; i < slideBtn.length; i++) {
    slideBtn[i].addEventListener("click", setSlide(i));
  }

};

var servicesSlideAnimation = function (slider) {
  var slides = slider.querySelectorAll('.services-item');
  var sliderBtn = slider.querySelectorAll('.services .btn');
  function hideSlide () {
    var num = findCurrentSlide(sliderBtn, 'services-toggle-active');
    slides[num].classList.add('visual-hidden');
    sliderBtn[num].classList.remove('services-toggle-active');
  }
  function showSlide (num) {
    slides[num].classList.remove('visual-hidden');
    sliderBtn[num].classList.add('services-toggle-active');
  }
  function switchSlide () {
    var nextSlide = setNextSlideNumber(sliderBtn, 'services-toggle-active');
    hideSlide();
    showSlide(nextSlide);
  }
  function setSlide (num) {
    return function () {
      hideSlide();
      showSlide(num);
      clearInterval(idInterval);
    };
  }
  
  var idInterval = setInterval(function(){switchSlide();}, slideTime);
  
  for (var i = 0; i < sliderBtn.length; i++) {
    sliderBtn[i].addEventListener('click', setSlide(i));
  }
  
};

var slideTime = 5000;
var animationSpeed = 800;
var slider = document.querySelector('.promo');
if (slider.querySelector('.promo-list')) {
  promoSliderAnimation(slider);
}
slider = document.querySelector('.services');
if (slider.querySelector('.services-list')) {
  servicesSlideAnimation(slider);
}
