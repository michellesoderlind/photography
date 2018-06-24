var arr_nav = ["aboutme", "portfolio", "contact"];
function showNav(id_nav_id) {
  for (var i = 0; i < arr_nav.length; i++) {
    // shown
    if (arr_nav[i] == id_nav_id) {
      document.getElementById(arr_nav[i]).removeAttribute("style");
    } else {
      // hidden
      document.getElementById(arr_nav[i])
        .setAttribute("style", "display: none;");
    }
  }
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
