$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.2+"px"});
});

$(function(){
	$('html').css({'font-size':$(window).width()/3.2+"px"});
	$('.yue').click(function(){
		$('.alert').fadeIn('1000');
		$('.sort').fadeIn('1000');
		$('.logo').fadeIn('1000');
	});
	$('.sort .no').click(function(){
		$('.alert').fadeOut('1000');
		$('.sort').fadeOut('1000');
		$('.logo').fadeOut('1000');
	});	

})
