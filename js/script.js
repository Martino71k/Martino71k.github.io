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

// // Отправка заявки 
// $(document).ready(function() {
// 	$('#order').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
// 		if (document.form.name.value == '' || document.form.email.value == '' ) {
// 			valid = false;
// 			return valid;
// 		}
// 		$.ajax({
// 			type: "POST",
// 			url: "php/mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$('.modal').fadeIn();
// 			$(this).find('input').val('');
// 			$('#order').trigger('reset');
// 		});
// 		return false;
// 	});
// });
// $(document).ready(function(){
//     $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
//             var form_data = $(this).serialize(); //собераем все данные из формы
//             $.ajax({
//             type: "POST", //Метод отправки
//             url: "send.php", //путь до php фаила отправителя
//             data: form_data,
//             success: function() {
//                    //код в этом блоке выполняется при успешной отправке сообщения
//                    alert("Ваше сообщение отпрвлено!");
// 						}
//     })
// });    
// }


// // Маска ввода номера телефона (плагин maskedinput)
// $(function($){
// 	$('[name="phone"]').mask("+7(999) 999-9999");
// });



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


// Modal works

// $('body').on('click', '.modal-open', function(e) {
// 	$('.modal-works, .modal-works__content').show();
// 	e.preventDefault();
// });

// $('body').on('click', '.modal-open--sedona', function(e) {
// 	$('.modal-works, .modal-works__content--sedona').show();
// 	e.preventDefault();
// });

// $('body').on('click', '.modal-open--pink', function(e) {
// 	$('.modal-works, .modal-works__content--pink').show();
// 	e.preventDefault();
// });

// $('body').on('click', '.modal-open--markdevs', function(e) {
// 	$('.modal-works, .modal-works__content--markdevs').show();
// 	e.preventDefault();
// });


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

var modal = document.querySelector('.modal-works'); // Работает только с первым

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

// for (var i = 0; i < modal.length; i++) {
// 	var modalClose = modal[i];
// }



