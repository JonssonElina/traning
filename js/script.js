
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction () {
  if (windoe.pageYOffset >= sticky) {
    navbar.classList.add ("sticky");
  }
}
