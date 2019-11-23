$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
var depth = 2;

(function ani(){
  $(".banner li").eq(n).css("z-index", depth++).fadeOut(0);
  $(".banner li").eq(n).delay(2000).fadeIn(2000, function(){
    if(n == 4) n = 0;
    else n++;
    ani();
  })

  
})();