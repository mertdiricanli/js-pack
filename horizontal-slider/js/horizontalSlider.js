/*
 * @author		Mert Diricanli
 * @copyright	digitalfabrika - 2012 
*/

// HorizontalSlider
(function($){
	$.fn.HorizontalSlider = function(AutoSlideTime, SlideWidth){	
		var element 		= this;
		var SlideButtons 	= element.find('.slidebuttons ul li');
		var SlideCount	 	= element.find('.slider .slide').length;

		var SliderWidth 	= SlideWidth * SlideCount;
		
		autoSlide = function(timer,id)
		{
			active = $('#'+id).find('.slidebuttons ul li.activebutton');
			if(active.next().length == 0)
			{
				$('#'+id).find('.slidebuttons ul li:first').click();
				return true;
			}
			
			active.next().click();
		}
		
		function slide(){	
			$(element).find('.slider').css({'width':SliderWidth});
			$(SlideButtons).click(function(){
				var slideIndex = $(SlideButtons).index(this);
				$(element).find('.slider').stop().animate({
					left: -slideIndex*SlideWidth
				},800,'easeInOutExpo')
				$(element).find('.slidebuttons ul li.activebutton').removeClass('activebutton');
				$(this).addClass('activebutton');	
			});
			
			if(AutoSlideTime)
			{
				$(element).hover(
					function()
					{
						window.clearTimeout($(this).data('timer'));
					},
					function()
					{
						$(this).data('timer', window.setInterval("autoSlide("+AutoSlideTime+",'"+$(element).attr('id')+"')",AutoSlideTime));
					}
				);
				$(element).data('timer', window.setInterval("autoSlide("+AutoSlideTime+",'"+$(element).attr('id')+"')",AutoSlideTime));
			}
			
		};
		
		slide();
	}
})(jQuery);
// HorizontalSlider