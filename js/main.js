// TIMER
var timer2 = "30:00";
var interval = setInterval(function () {


	var timer = timer2.split(':');
	//by parsing integer, I avoid all extra string processing
	var minutes = parseInt(timer[0], 10);
	var seconds = parseInt(timer[1], 10);
	--seconds;
	minutes = (seconds < 0) ? --minutes : minutes;
	if (minutes < 0) clearInterval(interval);
	seconds = (seconds < 0) ? 59 : seconds;
	seconds = (seconds < 10) ? '0' + seconds : seconds;
	//minutes = (minutes < 10) ?  minutes : minutes;
	$('.form__time').html(minutes + ':' + seconds);
	timer2 = minutes + ':' + seconds;
}, 1000);

// ЯКОРЬ
$('a[href^="#"]').click(function(){ 
	let anchor = $(this).attr('href');  
	$('html, body').animate({           
		scrollTop:  $(anchor).offset().top  
	}, 600);                            
});
