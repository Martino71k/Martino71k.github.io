//var slideWidth=300;
//var sliderTimer;
//$(function(){
//$('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
//    sliderTimer=setInterval(nextSlide,1000);
//    $('.viewport').hover(function(){
//        clearInterval(sliderTimer);
//    },function(){
//        sliderTimer=setInterval(nextSlide,1000);
//    });
//});
//
//function nextSlide(){
//    var currentSlide=parseInt($('.slidewrapper').data('current'));
//    currentSlide++;
//    if(currentSlide>=$('.slidewrapper').children().size())
//    {
//        currentSlide=0;
//    }
//    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
//}
// $(function() {
//   $('.wrapper').click(function() {
//   	$('.content').toggleClass('open');
//   	$(this).toggleClass('open');
//   })

// })

// $(document).ready(function() {
// 	// Update nav selected when click
// 	$('a').on('click', function() {
// 		console.log("haha");
// 		$('.navigation-link').removeClass('navigation__link--active');
// 		$(this).parent().addClass('navigation__link--active');
// 	});
//   slideSwitch();
	
// });


// document.getElementById('btn-back').onclick = sliderLeft;

// function sliderLeft() {
// 	console.log('Nazhat');
// }

// sliderLeft();

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
		
// // Slider
// let sliderImages = document.querySelectorAll('.slide'),
// 		arrowRight = document.querySelector('#arrow-right'),
// 		arrowLeft = document.querySelector('#arrow-left'),
// 		current = 0;

// 		// Clear all images
// 		function reset() {
// 			for(let i = 0; i < sliderImages.length; i++){
// 				sliderImages[i].style.display = 'none';

// 			}
// 		}

// 		// Init slider
// 		function startSlide() {
// 			reset();
// 			sliderImages[0].style.display = 'block';
// 		}

// 		// Show prev
// 		function slideLeft() {
// 			reset();
// 			sliderImages[current - 1].style.display = 'block';
// 			current--;
// 		}

// 		// Show next
// 		function slidRight(){
// 			reset();
// 			sliderImages[current +1].style.display = 'block';
// 			current++;
// 		}

// 		// Left arrow click
// 		arrowLeft.addEventListener('click', function(){
// 			if(current === 0){
// 			current = sliderImages.length;
// 		}
// 		slideLeft();
// 		});

// 		// Right arrow click
// 		arrowRight.addEventListener('click', function(){
// 			if(current === sliderImages.length - 1){
// 			current = -1
// 		}
// 		slideLeft();
// 		});

// 		startSlide();

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


// Form

// Отправка заявки 
$(document).ready(function() {
	$('#order').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.email.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "/php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.modal').fadeIn();
			$(this).find('input').val('');
			$('#order').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.modal__btn').click(function() { // по клику на крестик
	$('.modal').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.modal').fadeOut();
	}
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});



// // Кнопка «Наверх/Вниз»
// var lastScrollPosition = 0; 

// $('#scroll-up').click( function(){
// 	if ( $(document).scrollTop() > 0 ) {
// 		$('body').animate({scrollTop:0},1000);
// 		lastScrollPosition = $(document).scrollTop();
// 	} else {
// 		$('body').animate({scrollTop:lastScrollPosition},1000);
// 	}	
// });

// $(document).scroll( function() {
// 	if ( $(document).scrollTop() > 0 ) {
// 		$('#scroll-up').fadeIn();
// 		$('#scroll-up').text('Наверх');
// 	} else {
// 		$('#scroll-up').text('Вниз');
// 	}
// });

/* Preloader */ 
$(window).load(function() {
  setTimeout(function () { 
    $(".loader").delay(100).fadeOut().remove();   
  }, 2000);  
});
