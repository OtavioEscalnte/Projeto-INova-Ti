
window.onscroll = function() {myFunction()};


var header = document.querySelector("header");


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}