"use strict";

$(".regular").slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000
});
var dots = document.getElementById('threeDots');
var readMoreButton = document.getElementById('readMore');
var hideButton = document.getElementById('hideText');
var textMore = document.getElementsByClassName('text_more')[0];
var arrowReadMore = document.getElementsByClassName("arrowReadMore")[0];
var arrowHide = document.getElementsByClassName("arrowHide")[0];
$("body").on('click', '.read_more', function () {
  dots.style.display = 'none';
  readMoreButton.style.display = "none";
  hideButton.style.display = "inline";
  textMore.style.display = "inline";
  arrowReadMore.style.display = "none";
  arrowHide.style.display = "inline-block";
  arrowHide.style.transform = "rotate(270deg)";
});
$("body").on('click', '.hide', function () {
  dots.style.display = 'inline';
  readMoreButton.style.display = "inline";
  hideButton.style.display = "none";
  textMore.style.display = "none";
  arrowReadMore.style.display = "inline";
  arrowHide.style.display = "none";
});
window.onload = changeWindowSize();

window.onresize = function (event) {
  changeWindowSize(event);
};

function changeWindowSize(event) {
  width = document.body.clientWidth;
  picture = document.getElementsByClassName("picture_pluses")[0];

  if (width < 1440) {
    picture.style.opacity = width / 1440;

    if (width < 1000) {
      var pictures_story_picture = document.getElementsByClassName("pictures_story_picture")[0];
      pictures_story_picture.style.opacity = width / 1000;
    }
  }
}

var buttonToTop = document.getElementById("buttonToTop");

window.onscroll = function () {
  scrollUp();
};

function scrollUp() {}