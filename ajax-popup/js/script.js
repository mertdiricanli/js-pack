$(document).ready(function(){
	// Popup
	$('.open-popup').click(function()
	{
		winW = $(window).width();
		winH = $(window).height();
		popupId = $(this).attr('data-popupId');
		$('.loader-outer').css({width:winW, height:winH});
		$('.loader').css({left: (winW-52)/2+'px', top: (winH-52)/2+'px'});
		$('.loader-outer, loader').css({display : 'block'});
		// Loading
		$('.popup-here').load('popup-'+popupId+'.html', function(){
			$('.loader-outer,loader').css({display : 'none'});
			popup('#popup-'+popupId);
		});
	});
});
	
