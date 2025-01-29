// boîte 1

var changeBlue = document.querySelector(".change-color");

function changeColorBlue() {
  changeBlue.classList.add("is-active-blue");
}

changeBlue.addEventListener("click", changeColorBlue);

// boîte 2

var changeRed = document.querySelector(".toggle-color");

function changeColorRed() {
  changeRed.classList.toggle("is-active-red");
}

changeRed.addEventListener("click", changeColorRed);

// boîte 3 / 4

var pink = document.querySelector(".trigger");
var red = document.querySelector(".target");

function disapaerRight() {
  red.classList.toggle("is-active-none");
}

pink.addEventListener("click", disapaerRight);

// boîte 5

var changeGreen = document.querySelector(".trigger-all");

function changeBlueRed() {
  changeBlue.classList.add("is-active-blue");
  changeRed.classList.add("is-active-red");
}

changeGreen.addEventListener("click", changeBlueRed);

// boîte 6

var turquoise = document.querySelector(".trigger-all-self");

function changeTurquoise() {
  changeBlue.classList.add("is-active-blue");
  changeRed.classList.add("is-active-red");
  turquoise.classList.add("is-active-turquoise");
}

turquoise.addEventListener("click", changeTurquoise);
