(function($) {
	$.fn.dfFadeSlider = function(options){
		var settings = $.extend({
			slideButtons : 		'.slidebuttons li',
			prevNextButton : 	'.slidebtn',
			slideElm : 			'.slide',
			activeClass : 		'active',
			disabledClass: 		'disabled',
			prevBtnClass: 		'prev',
			nextBtnClass: 		'next',
			autoSlide: 			true,
			autoSlideTime: 		5000,
			fadeDuration: 		500
  	
		}, options);

	    return this.each( function() {
	    	var elm = $(this);
	    	var s = settings;

	        var activeSlide = 0;
			var slideCount = $(elm).find(s.slideElm).length;
			var checkBtns = function(a){
				if(a == 0)
				{
					$(elm).find(s.prevNextButton).removeClass(s.disabledClass);
					$(elm).find('.'+s.prevBtnClass).addClass(s.disabledClass);
				}
				else if(a == (slideCount-1))
				{
					$(elm).find(s.prevNextButton).removeClass(s.disabledClass);
					$(elm).find('.'+s.nextBtnClass).addClass(s.disabledClass);
				}
				else
				{
					$(elm).find(s.prevNextButton).removeClass(s.disabledClass);
				}
				$(elm).find(s.slideButtons).removeClass(s.activeClass);
				$(elm).find(s.slideButtons+':eq('+a+')').addClass(s.activeClass);
			}

			$(elm).find(s.prevNextButton).click(function(){
				if($(this).hasClass(s.prevBtnClass)){
					if(activeSlide > 0){
						$(elm).find(s.slideElm).fadeOut(s.fadeDuration);
						activeSlide--;
						checkBtns(activeSlide);
					}else{
						return false;
					}
				}else{
					if(activeSlide < (slideCount-1)){
						$(elm).find(s.slideElm).fadeOut(s.fadeDuration);
						activeSlide++;
						checkBtns(activeSlide);
					}else{
						return false;
					}
				}
				loadSlide(activeSlide);
			});

			$(elm).find(s.slideButtons).live('click',function(){
				var slideNum = $(this).index();
				if(slideNum != activeSlide)
				{
					activeSlide = slideNum;
					$(elm).find(s.slideElm).fadeOut(s.fadeDuration);
					loadSlide(activeSlide);

				}
				checkBtns(slideNum);
			});

			var loadSlide = function(activeSlideNum){
				changeSlide = $(elm).find(s.slideElm+':eq('+activeSlideNum+')');
				changeSlide.fadeIn(s.fadeDuration);
			}

			// Auto Slide
			var execAutoSlide = function(){
				if(activeSlide < slideCount-1){
					$(elm).find('.'+s.nextBtnClass).click();
				}else if(activeSlide = (slideCount-1)){
					$(elm).find(s.slideButtons+':eq(0)').click();	
				}
			}

			if(s.autoSlide){
				$(elm).hover(
					function()
					{
						window.clearTimeout($(this).data('timer'));
					},
					function()
					{
						$(this).data('timer', window.setInterval(execAutoSlide,s.autoSlideTime));
					}
				);
				$(elm).data('timer', window.setInterval(execAutoSlide,s.autoSlideTime));
			}
	    });
	}
}(jQuery));
