/* var imgs = 2;
var now = 0; */

$(document).ready(function () {
  $(".nav>li").mouseover(function() {	
    if($(this).children(".submenu").length > 0) {
      $(this).children(".submenu").stop().slideDown(500);
    }
   });
   $(".nav>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
   });

/*    start();

    function start(){
       $(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"});
       setInterval(function(){slide();},2000);
    }
    function slide(){
       now = now==imgs?0:now+=1;
       $(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});   
       $(".imgs>img").eq(now).css({"margin-left":"0px"});
    } */

    $( ".btn_slides_next" ).click(function() {
      if(!$("#slides li").last().is(":visible")){
          $("#slides li:visible").hide().next("li").fadeIn("40");
          $(".btn_slides_prev").removeClass("off");
      }
      if($("#slides li").last().is(":visible")){
          $('.btn_slides_next').addClass('off');
      }
      return false;
  });
  
  $( ".btn_slides_prev" ).click(function() {
      if(!$("#slides li").first().is(":visible")){
          $("#slides li:visible").hide().prev("li").fadeIn("40");
          $(".btn_slides_next").removeClass("off");
      }
      if($("#slides li").first().is(":visible")){
          $('.btn_slides_prev').addClass('off');
      }
      return false;
  });