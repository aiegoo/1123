$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
});

/* $(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
  $("ul > div > span", $(this)).empty().replaceWith("`<span>-</span>`");
}, function(){
  $("ul", $(this)).stop().slideUp();
});
 */
/* $(".nav > div").click(function(){
  $(".nav > ul").stop().empty().replaceWith();
}, function(){

}); */