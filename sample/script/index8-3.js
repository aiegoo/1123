$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
});

$(".bts").click(function(){
  var n = $(this).index();
  $(".bts").css({"color":"#fff"});
  $(".bts").eq(n).css({"color":"#f30"});
  $(".banner > ul").stop().animate({"left":(-n*1000)+"px"}, 500);
});