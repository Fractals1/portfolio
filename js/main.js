$(function(){
	$('a[data-toggle="modal"]').on("click",function(a){
		var o=$(this).attr("data-work");
		$(".modal").find(".modal-body").load(o+".html");
	})
});
$(document).ready(function(){
    $('.call__button').on("click", function(){
        $('.overlay, .popup-call').show();
        $('.popup-thanks, .fade').hide()
    });
    $('.close').on('click',function(){
        $('.overlay').hide();
    });
});
$('.form1').submit(function(event){
    event.preventDefault();
    $.ajax({
        url:     "mailer/mail.php",
        type:     "POST",
	    data: $('.form1').serialize() + '&price='+$(price).text(),
    }).done(function() {
	    $(this).find("input").val("");
	    $('.popup-call').hide();
	    $('.popup-thanks').show();
	});
	return false;
}) ;
$('.form2').submit(function(event){
    event.preventDefault();
    $.ajax({
        url:     "mailer/mail.php",
        type:     "POST",
	    data: $('.form2').serialize(),
    }).done(function() {
	    $(this).find("input").val("");
	    $('.popup-call').hide();
	    $('.popup-thanks').show();
	});
	return false;
}) ;
$(function() {
    var wCount = $('.w-count'),
        counterblock = $('.counter-block'),
        typeOfweb = $('input[name="typeOfweb"]').val(),
        adaptive = $('#adaptive-check'),
        adaptiveNav = $('#nav-check'),
        price = $('#price'),
        basePrice = 500,
        adaptivePrice = 0,
        navPrice = 0,
        corpPrice = 12000,
        finalPrice = 2000;

        wCount.change(function() {
            if ($(this).val() > 1) {
                $(this).tooltip('hide');
                finalPrice =  (+ wCount.val() * basePrice) * +typeOfweb + +adaptivePrice  + +navPrice; 
                price.text(finalPrice);
            } else {
                $(this).tooltip('show');  
            }
        }); 
        $('input[name="typeOfweb"]').change(function(event) {
            typeOfweb = $(this).val();
            finalPrice =  (+ wCount.val() * basePrice) * +typeOfweb + +adaptivePrice  + +navPrice; 
                price.text(finalPrice);
                if ($(this).val() == 1) {
                        $('#blocks-block').show();
                        $('#pages-block').hide();
                } else {
                        $('#pages-block').show();
                        $('#blocks-block').hide();
                }

        });
        adaptive.change(function(event) {
            if ($(this).is(':checked')) {
                adaptivePrice = 200 * wCount.val();
                finalPrice =  (+ wCount.val() * basePrice) * +typeOfweb + +adaptivePrice  + +navPrice; 
                    price.text(finalPrice);
            } else {
                adaptivePrice = 0;
                finalPrice =  (+ wCount.val() * basePrice) * +typeOfweb + +adaptivePrice  + +navPrice; 
                price.text(finalPrice);
            }
        });
        adaptiveNav.change(function(event) {
           if ($(this).is(':checked')) {
                navPrice = 500;
                finalPrice =  (+ wCount.val() * basePrice) * +typeOfweb + +adaptivePrice + +navPrice; 
                    price.text(finalPrice);
            } else {
                navPrice = 0;
                finalPrice =  (+ wCount.val() * basePrice) * +typeOfweb + +adaptivePrice  + +navPrice; 
                price.text(finalPrice);
            }
        });
        price.text('2000');
});