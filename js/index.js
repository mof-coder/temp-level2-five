// change src

var $window = window.innerWidth,
  $imeone = document.getElementById("ime-one"),
  $imetwo = document.getElementById("ime-two"),
  $imethre = document.getElementById("ime-three"),
  $imefour = document.getElementById("ime-four"),
  $navbar = document.getElementById("navbar-h"),
  $header = document.getElementById("h-h"),
  $list = document.getElementById("list"),
  $tog = document.getElementById("tog");
function chimg() {
  if ($window <= 990) {
    $imeone.src = "img/bg-pattern-intro-right-mobile.svg";
    $imetwo.src = "img/bg-pattern-intro-left-mobile.svg";
    $imethre.src = "img/bg-pattern-how-we-work-mobile.svg";
    $imefour.src = "img/bg-pattern-footer-mobile.svg";
  } else {
    $imeone.src = "img/bg-pattern-intro-right-desktop.svg";
    $imetwo.src = "img/bg-pattern-intro-left-desktop.svg";
    $imethre.src = "img/bg-pattern-how-we-work-desktop.svg";
    $imefour.src = "img/bg-pattern-footer-desktop.svg";
  }
}
chimg();

window.onresize = function () {
  $window = window.innerWidth;

  if ($window <= 990) {
    $imeone.src = "img/bg-pattern-intro-right-mobile.svg";
    $imetwo.src = "img/bg-pattern-intro-left-mobile.svg";
    $imethre.src = "img/bg-pattern-how-we-work-mobile.svg";
    $imefour.src = "img/bg-pattern-footer-mobile.svg";
  } else {
    $imeone.src = "img/bg-pattern-intro-right-desktop.svg";
    $imetwo.src = "img/bg-pattern-intro-left-desktop.svg";
    $imethre.src = "img/bg-pattern-how-we-work-desktop.svg";
    $imefour.src = "img/bg-pattern-footer-desktop.svg";
  }
};

function navhit() {
  $navbar = document.getElementById("navbar-h").offsetHeight;
  $header = document.getElementById("h-h");
  console.log($navbar);
  $header.style.marginTop = $navbar + "px";
}
navhit();

// navbar toggile
var chack = true;
$tog.onclick = function () {
  if (chack == true) {
    $tog.src = "img/icon-close.svg";
    $list.classList.add("show");
    chack = false;
  } else {
    $tog.src = "img/icon-hamburger.svg";
    $list.classList.remove("show");
    chack = true;
  }
};
