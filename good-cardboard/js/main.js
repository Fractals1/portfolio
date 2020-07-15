$(document).ready(function(){
	$('.call__button').on("click", function(){
		$('.overlay').show()
	});
	$('.popup-close').on('click',function(){
			$('.overlay').hide();
	});
});
jQuery(function($){
	$('.popup-form__input').mask("+7 (999) 999-99-99");
});
$(document).ready(function(){
	$('.contacts-block__button').on("click", function(){
		$('.overlay').show()
	});
	$('.popup-close').on('click',function(){
			$('.overlay').hide();
	});
});
