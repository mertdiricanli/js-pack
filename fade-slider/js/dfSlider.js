(function($) {
	$.fn.extend({

		dfSlider : function(options) {

			var defaults = {
				slideButtons		: '.slidebuttons',
				slideDiv			: '.slides',
				slideEasing			: 'easeInOutExpo',
				buttonEasing		: 'easeInExpo',
				delayOut			: 1000,
				timerDelay			: 5000,
				normalZIndex		: 1,
				activeZIndex		: 5
			};

			var options = $.extend(defaults, options);
			
			var selectedSlide = null;

			return this.each(function() {
				var o 			= options;
				var obj			= $(this);
				var objButtons 	= obj.find(o.slideButtons);
				var slideDiv	= obj.find(o.slideDiv);
				var timer	    = setTimeout('void(0)',0);
				var isManual	= false;
				activeSlideID	= -1;
				
				$(obj).find('.slide:eq(0)').addClass('firstSlide');
				objButtons.find('li a').click(itemClicked);
				objButtons.find('li').hover(itemHover,itemHout);
				slideDiv.find('.slide').hover(itemHover,itemHout);
						
				itemHout();				
					
				function itemHover(){
					window.clearTimeout(timer);
					isManual = true;
				};
				
				function itemHout(){
					timer = setTimeout(itemClicked,o.timerDelay);
					isManual = false;
				};
				
				var goToSlideID = 0;
				
				function itemClicked (){

					if(isManual == false){
						goToSlideID++;
					}else{
						goToSlideID = $(this).parent().index();	
					}
					
					goToSlideID %=	objButtons.find('li').length;		
										
					if(activeSlideID == goToSlideID){ return false; }
					
					li = $(objButtons.find('li')[goToSlideID]);
					li.stop();
					objButtons.find('li.active').removeClass('active');
					
					li.addClass('active');
					
					if(selectedSlide){
						selectedSlide.fadeOut(o.delayOut);
						$('.firstSlide').removeClass('firstSlide');
					}
					
					activeSlideID = goToSlideID;
					
					selectedSlide		= $(slideDiv.find('.slide')[activeSlideID]);
					selectedSlide.fadeIn(o.delayOut);					
					
					if(isManual == false){
						timer = setTimeout(itemClicked,o.timerDelay);
					}
					
					return false;
				};


				/* Center Buttons
				var objButtonsleft = $(objButtons).width();
				var slideWidth = $(obj).find('.slide').width();
				objButtonsleft = (slideWidth - objButtonsleft) / 2;
				$(objButtons).css('left', objButtonsleft);
				 */
			});
		

		}
	});
})(jQuery);
