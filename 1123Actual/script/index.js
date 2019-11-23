$(".nav").hover(function(){
     $(".submenu", $(this)).stop().slideDown();
}, function(){
     $(".submenu", $(this)).stop().slideUp();
});

var n = 0;
var depth = 100;
(function aniFade(){
     $(".slide li").eq(n).fadeOut(0).css({"z-index":depth++});
     $(".slide li").eq(n).delay(1000).fadeIn(500, function(){
          n++;
          if(n==3) n=0;
          aniFade();
     });
})();

var Contents = $(".tab-content div");
$(Contents).hide();
$(Contents).last().slideDown(300);
$(".tab-buttons span").click(function(){
     var Tabs = $(this).attr("class")
   $("#lamp").removeClass().addClass("#lamp").addClass(Tabs);
   $(Contents).each(function(){
        if($(this).hasClass(Tabs)){
             $(this).fadeIn(500);
        }else{
             $(this).hide();
        }
   });  
});
