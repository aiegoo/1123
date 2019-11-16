$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
    n++;
    if(n==5) {
      n=0;
      $(this).css("left", "0px");
    } 
    ani();
  });
})();

function modalOpen(){
  $("#modal-bg").show(0);
  $("#modal-wrap").css("display", "table-cell");
}

function modalClose() {
  $("#modal-bg").hide(0);
  $("#modal-wrap").css("display", "none");
}

function winOpen() {
  window.open("win.html", "win", "widht=500, height=500, left=200, top=200, scrollbars=no, toolbar=no, menubar=no, status=no, resizable=no, location=no");
}