(function($) {
	$.fn.extend({

		newsSlider : function(options) {

			var defaults = {
				slideButtons		: '',
				slideInfo			: '',
				slideDiv			: '',
				slideElm			: 'div',
				easing				: '',
				delay				: 800,
				itemHeight			: 278,
				itemWidth			: 650,
				viewItem			: 3,
				direction			: 'vertical'
			};

			var options = $.extend(defaults, options);
			
			return this.each(function() {
				var o 			= options;
				var obj			= $(this);
				var objButtons 	= obj.find(o.slideButtons);
				var slideInfo	= obj.find(o.slideInfo);
				var slideDiv	= obj.find(o.slideDiv);							
				var newsPage 		= 1;
				
				var newsTotalPage 	= Math.round(slideDiv.children(o.slideElm).length / o.viewItem);	
				
				newsTotalPage = newsTotalPage ? newsTotalPage : 1;
					
				switch (o.direction) {
					case 'vertical':
						slideDiv.css({
							'height' : slideDiv.find(o.slideElm).length * o.itemHeight
						});
						break;
					case 'horizantal':
						slideDiv.css({
							'width' : slideDiv.find(o.slideElm).length * o.itemWidth
						});	
						
						var itemWidth	= o.viewItem * o.itemWidth;
										
						break;
					default:
						break;
				}
				
				slideInfo.html(newsPage+'/'+newsTotalPage);
				
				objButtons.children('span').click(function(){
				
					newsPage 	= ($(this).attr('class') == 'prev' ? newsPage-1 : newsPage+1);
					
					switch (o.direction) {
					case 'vertical':
						slideWidth	= o.itemHeight*(newsPage-1);
							break;
					case 'horizantal':
						slideWidth	= itemWidth * (newsPage-1);
						break;
					default:
						break;
					}
					
					if(newsPage <= newsTotalPage && newsPage > 0){
						switch (o.direction) {
						case 'vertical':
							slideDiv.stop().animate({'top':'-'+slideWidth+'px' },o.delay,o.easing);
								break;
						case 'horizantal':
							slideDiv.stop().animate({'left':'-'+slideWidth+'px' },o.delay,o.easing);
							break;
						default:
							break;
						}						

					}else{
						if(newsPage < 1){ newsPage = 1; }else{ newsPage -=1; }	
					}
					
					return false;
				});
				
			});

		}
	});
})(jQuery);
