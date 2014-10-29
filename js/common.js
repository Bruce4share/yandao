$(function(){
	$('.banner-title').addClass('anima-fade');
	$('.nav-link').each(function(){
		$(this).hover(function(){
			$(this).siblings('dl').slideDown();
		},function(){
			$(this).siblings('dl').slideUp();
		});
	});
	var iNum = 0;
	var cons = true;
		document.body.onmousewheel = scrollfunc;
        document.body.addEventListener("DOMMouseScroll", scrollfunc,false);
        var intval;
        function scrollfunc(event){
        	var iStrar = 0;
        	var iScrolh = $(window).height();
        	var iTime = 400;
        	var iSect = iScrolh/(iTime/20);

        	event = event || window.event;

        	if(cons){
        		if(event.wheelDelta){
	        		iNum = event.wheelDelta;
	        	}else{
	        		iNum = event.detail*-40;
	        	}
	        	intval = setInterval(function(){
	        		if(iNum == -120){
	        			iStrar+=iSect;
	        			intvanfn(iStrar);
	        			cons = false;
	        		}
	        		event.preventDefault();
	        	},20);
        	}
        }
        function intvanfn(iStrar){
        	if($(window).scrollTop()<$(window).height()){
        		$(window).scrollTop(iStrar);
        	}else{
        		clearInterval(intval);
        	}
        }
});