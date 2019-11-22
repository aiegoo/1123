$(".nav").hover(function(){
    $("ul.submenu", $(this)).stop().slideDown();
}, function(){
    $("ul.submenu", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
    $(".banner ul").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
        n++;
        if(n==5) {
            n=0;
            $(this).css("left", "0px");
        }
        ani();
    });
})();

function modalOpen() {
    $("#modal-bg").show(0);
    $("#modal-wrap").css("display", "table-cell");
}

function modalClose() {
    $("#modal-bg").hide();
    $("#modal-wrap").css("display", "none");
}

function popUp() {
    window.open("win.html", "win", "width=500, height=500, top=300, left=300, scrollbars=no, toolbar=no, menubar=no, location=no, resizable=no, status=no");
}

var Content = $(".tab-content > div");
$(Content).hide();
$(Content).last().slideDown();
$(".tab-buttons span").click(function(){
    var Tabs = $(this).attr("class");
    $("#lamp").removeClass().addClass("#lamp").addClass(Tabs);
    $(Content).each(function(){
        if($(this), hasClass(Tabs)){
            $(this).fadeIn(800);
        }else{
            $(this).hide();
        }
    });
});

(function(){
    $(".service-slide li:gt(0)").hide();
    $("#gallery-button .btn-prev").click(function(){
        $("#galleryFolder li:first").stop().fadeOut(1000).next().fadeIn(1000).end().appendTo(".service-slide");
    });
    $("#gallery-button .btn-next").click(function(){
        $(".service-slide li:last").prependTo(".serivce-slide").fadeIn().next().fadeOut();
    });
})();