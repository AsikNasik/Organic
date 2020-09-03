$(".regular").slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

let dots = document.getElementById("threeDots");
let readMoreButton = document.getElementById("readMore");
let hideButton = document.getElementById("hideText");
let textMore = document.getElementsByClassName("text_more")[0];
let arrowReadMore = document.getElementsByClassName("arrowReadMore")[0];
let arrowHide = document.getElementsByClassName("arrowHide")[0];

$("body").on("click", ".read_more", function () {
  dots.style.display = "none";
  readMoreButton.style.display = "none";
  hideButton.style.display = "inline";
  textMore.style.display = "inline";
  arrowReadMore.style.display = "none";
  arrowHide.style.display = "inline-block";
  arrowHide.style.transform = "rotate(270deg)";
});

$("body").on("click", ".hide", function () {
  dots.style.display = "inline";
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
      let pictures_story_picture = document.getElementsByClassName(
        "pictures_story_picture"
      )[0];
      pictures_story_picture.style.opacity = width / 1000;
    }
  }
}

let buttonToTop = document.getElementById("buttonToTop");

window.onscroll = function () {
  scrollUp();
};

function scrollUp() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    buttonToTop.style.display = "block";
  } else {
    buttonToTop.style.display = "none";
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let body = document.getElementsByTagName("body")[0];
$(".open-menu").on("click", function () {
  let $btn = $(this);
  let $wrapper = $(".header");

  if ($wrapper.hasClass("navigation--open")) {
    body.style.overflow = "visible";
  } else {
    body.style.overflow = "hidden";
  }

  $wrapper.toggleClass("navigation--open");
  $btn.toggleClass("open");
});
