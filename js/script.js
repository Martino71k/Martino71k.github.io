let navMenu = document.getElementById('#nav');

$( ".navigation__close-btn" ).click(function() {
  $( ".navigation__list" ).toggle( "fast", function() {
    // Animation complete.
  });
});

$('.navigation__close-btn').click(function(){
  $(this).toggleClass('active');
});

// Scroll

$(document).ready(function() {
  $("#menu").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
});
		
// Slider

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();


/* Preloader */ 
$(window).load(function() {
  setTimeout(function () { 
    $(".loader").delay(100).fadeOut().remove();   
  }, 2000);  
});




// // Header change while sroll

// var header = document.querySelector('.page-header');

// var headerChange = function(e) {
// 	if (window.pageYOffset > 5) {
// 		header.classList.add('page-header--scroll');
// 	} 
// 	else {
// 		header.classList.add('page-header');
// 	}
// };

// (function () {
// 	if(window.addEventListener('scroll', headerChange));
// })();



$('body').on('click', '.modal-open--sedona', function(e) {
	$('#sedona, .modal-works__content').show();
});

$('body').on('click', '.modal-open--pink', function(e) {
	$('#pinkid, .modal-works__content').show();
});

$('body').on('click', '.modal-open--markdevs', function(e) {
	$('#markdevsid, .modal-works__content').show();
});

// close modal

var modal = document.querySelector('.modal-works'); 

window.onclick = function(event) {
	if (event.target == modal) {
			modal.style.display = "none";
	}
}

window.onclick = function(event) {
  var isModal = (' ' + event.target.className + ' ').indexOf(' modal-works ') > -1;
  if (isModal) {
    event.target.style.display = "none";
  }
}



