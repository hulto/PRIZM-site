var main = function() {

  	$('.dropdown-toggle').hover(function() {
		$('.dropdown-menu').toggle();
  	});
  	$('.dropdown-menu').hover(function(){
  		$('.dropdown-menu').toggle();
  	});
  	$('.submit-button').click(function(){
  		window.open('mailto:HPPrizmsubmission@gmail.com?subject=PRIZM submission&body=[enter your name and attach and an image of your artwork]')
  	});	
};

$(document).ready(main); 	