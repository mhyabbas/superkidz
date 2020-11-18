$(function() {

	// Burger menu toggle

	$(".toggle a").on("click", function(e) {
		e.preventDefault();
		if ($(".nav").hasClass("active")) {
			$(".nav").removeClass("active");
			$("body").removeClass("nav-open");
		} else {
			$(".nav").addClass("active");
			$("body").addClass("nav-open");
		}

		if ($(".item").hasClass("active")) {
			$(".item").removeClass("active");
			$(this).html("<i class='material-icons'>menu</i>");
		} else {
			$(".item").addClass("active");
			$(this).html("<i class='material-icons'>menu_open</i>");
		}
	});

	// Mobile navigation
	
	$(".nav ul li a svg").on("click", function(e) {
		e.preventDefault();
		if ($(this).parent().parent().hasClass("current")) {
			$(".item").removeClass("current");
		} else {
			$(".item").removeClass("current");
			$(this).parent().parent().addClass("current");
		}
	});

});