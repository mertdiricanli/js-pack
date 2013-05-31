$(document).ready(function(){
	// Waiting first slide load and executing slider..
	if(navigator.userAgent.search(new RegExp('(Android|iPhone|palm|palmos|palmsource|blackberry|nokia|phone|midp|pda|wap|java|nokia|hand|symbian|chtml|wml|ericsson|lg|audiovox|motorola|samsung|sanyo|sharp|telit|tsm|mini|windows ce|smartphone|mobileexplorer|j2me|sgh|portable|sprint|vodafone|docomo|kddi|softbank|pdxgw|jphone|astel|minimo|plucker|netfront|xiino|mot-v|mot-e|portalmmm|sagem|sie-s|sie-m|ipod)','gi')) > -1)
	{
		var slide = $('.slide1').css('background-image');
		slide = slide.replace('url(','').replace(')','');
		slide = slide.match(/http(s?):\/\/([^")]+)/g)[0]

		$('<img/>').attr('src',slide).load(function(){
			$('.slide1').fadeIn(1000, 'easeInOutExpo');
			$('#home-slider').dfSlider();
		});
	}
	else
	{
		$('#home-slider').dfSlider();
	}
});
	
