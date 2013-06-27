function popup(id){
	$('.popup, .modalmask').css('visibility', 'hidden');
	var winW = $(window).width();
	var winH = $(window).height();

	if(winH < $(id).height()){
		$(id).css({left: (winW-$(id).width())/2, top: '5px'});
	}else{
		$(id).css({left: (winW-$(id).width())/2, top: (winH-$(id).height())/2});
	}
	$('.modalmask').css({width: $(window).width(), height: $(document).height()});
	$('.modalmask').css({'visibility':'visible'});
	if(winH < $(id).height()){
		$('html,body').scrollTop(0);
	}
	$(id).css({'visibility':'visible'});
	$('.close, .modalmask').click(function(e){
		e.preventDefault();
		$('.modalmask').css('visibility', 'hidden', function(){
			//$(this).css({display: 'none'});
			//$(id).css({display: 'none'});
		});
		$(id).css('visibility', 'hidden');
	});
}