(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		

				
		
		$(".slider1").owlCarousel({
	 	"items" : 5,
	 	"margin" : 15,
	 	"autoplay": true,	 	
	 	"autoplayTimeout" : 3000,
	 	"loop" : true,
	 	"dots" : false,
	 	"responsive" : {
	 		0 : {
	 			"items" : 1
	 		},
	 		576 : {
	 			"items" : 1
	 		},
	 		767 : {
	 			"items" : 1
	 		},
	 		991 : {
	 		 	"items" : 1
	 		}


	 	}
	 });




		var owl = $('.slider1');
		owl.owlCarousel();
		// Go to the next item
		$('.custombtn').click(function() {
		    owl.trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('.custombbtn').click(function() {
		    // With optional speed parameter
		    // Parameters has to be in square bracket '[]'
		    owl.trigger('prev.owl.carousel', [300]);
		})

		
		
		


		jQuery(document).ready(function(){
		$(".slider2").owlCarousel({
			 	"items" : 5,
			 	"margin" : 15, 
			 	"autoplay": true,	 	
			 	"autoplayTimeout" : 6000,	
			 	"loop" : true,
			 	"dots" : false,
			 	"responsive" : {
			 		0 : {
			 			"items" : 1
			 		},
			 		576 : {
			 			"items" : 1
			 		},
			 		767 : {
			 			"items" : 3
			 		},
			 		991 : {
			 		 	"items" : 3
			 		}


			 	}
			 });




				var owl = $('.slider2');
				owl.owlCarousel();
				// Go to the previous item
				$('.custombbttn').click(function() {
				    // With optional speed parameter
				    // Parameters has to be in square bracket '[]'
				    owl.trigger('prev.owl.carousel', [300]);
				})

		});

		
		
		
		
	});
})(jQuery);