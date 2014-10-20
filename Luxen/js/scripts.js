(function() {
    $(document).ready(function() {

	// Initialize DOM elements

	
	// Initialize nav object for manipulating the nav.
	var nav = new Nav();
	
	function Nav() {
	    var $nav = $("div.major-header");
	    var $next = $nav.next();
	    var position = $nav.offset().top;
	    var isStuck = false;
	    this.atTop = function() {
			var docViewTop = $(window).scrollTop();
			return (position <= docViewTop);
	    };
	    this.stick = function() {
			$nav.attr("style", "position: fixed; top: 0; left: 0;");
			$next.attr("style", "margin-top: " + $nav.outerHeight() + "px");
			isStuck = true;
	    };
	    this.unstick = function() {
			$nav.removeAttr("style");
			$next.removeAttr("style");
			isStuck = false;
	    };
	    this.refreshPosition = function() {
			if (isStuck) {
			    position = $next.offset().top;
			} else {
			    position = $nav.offset().top;
			}
	    };
	};

	$(window).on("resize orientationChanged", function() {
	    // Reposition nav on window resize or orientation change
	    nav.refreshPosition();
	    if (nav.atTop()) {
		nav.stick();
	    } else {
		nav.unstick();
	    }
	});

	
	$(window).on("scroll", function() {
	    // Stick nav to top when page scrolls to a point at or below the
	    // natural nav position
	    if (nav.atTop()) {
		nav.stick();
	    } else {
		nav.unstick();
	    }
	});
    });    
})();


//SLIDER

$(document).ready(function(){
  $('.bxslider').bxSlider();
});


//3-LINE DROP_DOWN MENU

$("#nav").addClass("js").before('<div id="menu">&#9776;</div>');
$("#menu").click(function(){
	$("#nav").toggle();
});
$(window).resize(function(){
	if(window.innerWidth > 925) {
		$("#nav").removeAttr("style");
	}
});

//Flexslider 

$(window).load(function() {
	$('.flexslider').flexslider({

		// Slide instead of Fade
		animation: "slide",

		// No Arrows
		directionNav: false 
	});
});

$(document).ready(function(){
	$('.nav a').smoothScroll({
		offset: -65
	});
});


//DatePicker

// $('#defaultPopup,#defaultInline').datepick(); 
 
// $('.disablePicker').click(function() { 
//     var enable = $(this).text() === 'Enable'; 
//     $(this).text(enable ? 'Disable' : 'Enable'). 
//         siblings('.is-datepick').datepick(enable ? 'enable' : 'disable'); 
// }); 
 
// $('#removePicker').click(function() { 
//     var destroy = $(this).text() === 'Remove'; 
//     $(this).text(destroy ? 'Re-attach' : 'Remove'); 
//     $('#defaultPopup,#defaultInline').datepick(destroy ? 'destroy' : {}); 
// });

// $.datepick.setDefaults({.calendar: 'my-picker'});

// $(.calendar).datepick({minDate: new Date(2014, 12-1, 25)});

// $(.calendar).datepick();

// $(.calendar).datepick({dateFormat: 'yyyy-mm-dd'});