$(document).ready(function(){

    $(".src-toggle-bt").click(function(e){
        $(".src-form").addClass("active");
        $(".src-form input").focus();
    });

    $(".src-form").click(function(e){
        e.stopPropagation();
    });

    $(document).click(function(){
        $(".src-form").removeClass("active");
    });

    $(".tab-bt li a").click(function(t){
        t.preventDefault();
        $(".tab-ct").removeClass("show");
        $($(this).attr("href")).addClass("show");

        $(".tab-bt li").removeClass("active");
        $($(this).parent()).addClass("active");
    });

    $(".burger").click(function(){
        $(".mob-nav-wrapper").toggleClass("show");
        $($(this).children("i")).toggleClass("fa-times fa-bars");
    });

});