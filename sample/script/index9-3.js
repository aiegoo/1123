function winOpen(){
      window.open("win-3.html", "win", "width=400, height=400, top=200, left=200");
}

function modalOpen() {
      $("#modal_bg").show(0);
      $("#modal_wrap").css({"display": "table"});
}

function modalClose() {
      $("#modal_bg").hide(0);
      $("#modal_wrap").css({"display": "none"});
}