
var n = 0;
var depth = 2;

$(".nav").hover(function(){
	$("ul", $(this)).stop().slideDown();
}, function(){
	$("ul", $(this)).stop().slideUp();
});


(function ani() {
	$(".banner li").eq(n).css("z-index", depth++).fadeOut(0);
	$(".banner li").eq(n).delay(1000).fadeIn(500, function(){
		if(n == 4) n = 0;
		else n++;
		ani();
	});
})();