$(document).ready(function(){
	"use strict";
	function footerFixed(){
		var topRow = parseInt($('#wrapper').css('padding-top'),10)+$('.logo-row').outerHeight();
		var bottomRow = parseInt($('#wrapper').css('padding-bottom'),10)+$('#wrapper .footer').outerHeight()+parseInt($('#wrapper .footer').css('margin-top'),10)+parseInt($('#wrapper .footer').css('margin-bottom'),10);

		var topBottomHeight = topRow+bottomRow;

		var middleAreaHeight = window.innerHeight-topBottomHeight

		var middleHeight = $('.middle-area').outerHeight();
		
		if(middleHeight > middleAreaHeight){
			$('#wrapper .footer').removeClass('fixed');
			$('.middle-area').removeClass('setMiddle');
			
		}else{
			$('#wrapper .footer').addClass('fixed');
			$('.middle-area').addClass('setMiddle');
			
		}
	}
	footerFixed()

	$(window).resize(function(e){
		footerFixed();
	})

	$(document).on('submit', '#news', function(e) {
		e.preventDefault();	
		if($('#input').val().toUpperCase().trim() == "VALARCONVOTAE") {
			window.location.href = "html/level1.html";
		}
		else {
			alert("Invalid token number");
		}
	});
});

(function($){

	"use strict";

	/* Demo Slideshow */
	
	$("#slideshow > div:gt(0)").hide();
	var wait=false;
	setInterval(function() { 
		if(wait){
			wait=false;
			return false;
		}
		$(".tab-pane").fadeOut();
		var active=$(".tab-pane.active");
		var id=active.next().attr("id"); 
		if(active.is(":last-child"))
		{
			active.removeClass("active");
			$(".tab-pane:first-child").addClass("active").fadeIn();
			id=$(".tab-pane:first-child").attr("id"); 
		}else 
		{
		active.removeClass("active").next().addClass("active").fadeIn();
		}
		$('.tab-nav').children().removeClass("active");
		$('a[href="#'+id+'"]').parent("li").addClass("active");
	},  5000);

	$(document).on('click', '.tab-nav a', function(e) {
		var $_this=$(this);
		var id=$_this.attr("href").split("#");
		$('.tab-pane').fadeOut();
		$("#"+id[1]).addClass("active").fadeIn();
		$_this.addClass('active');	
		wait=true;
	});
	
})(jQuery);