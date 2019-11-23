$(".nav").hover(function(){
	$("ul.submenu", $(this)).stop().slideDown();
}, function(){
	$("ul.submenu", $(this)).stop().slideUp();
})

var n = 0;

$("#btn_next").click(function(){
	if(n < 4) n++;
	ani();
});

$("#btn_prev").click(function(){
	if(n > 0) n--;
	ani();
});

function ani() {
	$(".banner > ul").stop().animate({"left":(-n*1000)+"px"}, 500);
}

