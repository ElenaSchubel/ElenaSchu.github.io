var slideIndex = 0;
var t;
var dots;
var maxheight = 0;
var timedelay = 4000;
showSlides(slideIndex);
carousel();


function plusSlides(n) {
    showSlides(slideIndex += n);

}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
   var slides = document.getElementsByClassName("slides");
   dots = document.getElementsByClassName("dot");
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




function carousel() {
    var i;

    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }


       slides[slideIndex-1].style.display = "block";
         dots[slideIndex-1].className += " active";
    t = setTimeout(carousel, timedelay);
}


function pauseSlides() {

  clearTimeout(t)
}

function startSlides() {

  t = setTimeout(carousel, timedelay);
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {


    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
