$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function() {
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani() {
  $(".banner > ul").delay(2000).animate({"left":"-=1000px"}, 5000, function() {
    /* if(n = n==ul?0:n+=1)  */n++;
    if(n == 5) {
      n = 0;
      $(this).css({"left": "0px"});
      }
            ani();
            /* setInterval(function(){ani();}, 2000) */
      });
})();


function modalOpen(){
     $("#modal-bg").show(0);
     $("#modal-wrap").css("display", "table-cell");
}
function modalClose(){
     $("#modal-bg").hide(0);
     $("#modal-wrap").css("display", "none");
}


function winOpen() {
  window.open("win.html", "win", "width=400, height = 300, top = 200, left = 300, toolbar = no, menubar = no, scrollbars = no, status = no, location = no, resizable = no");
}