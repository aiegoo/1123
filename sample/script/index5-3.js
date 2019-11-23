//jshint esversion:6
var n = 0;
$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
});

(function ani(){
  $(".banner > ul").delay(2000).animate({"left":"-=1000px"}, 500, function(){
    n++;
    if(n == 5) {
      n = 0;
      $(this).css({"left":"0px"});
    }
  ani();
  });
})();