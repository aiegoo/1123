
var n = 0;
var depth = 100;
(function ani() {
      $(".banner li").eq(n).css("z-index", depth++).fadeOut(0);
      $(".banner li").eq(n).delay(2000).fadeIn(1000, function(){
            n++;
            if(n == 4) n = 0;
            ani();
      });
})();