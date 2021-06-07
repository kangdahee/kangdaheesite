var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;
function showSlides(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].getElementsByClassName.display = "none";
  }
  slides[n].style.display = "block";
}
var current = 0;
showSlides ();

function showSlides() {
  var slides = document.querySelectorAll("#slides > img");
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  current++;
  if(current > slides.length)
  current = 1;
  slides[current - 1].style.display = "block";
  setTimeout(showSlides, 2000)
}