$("#btn-detalhes").on("click",function(){
    $("#info-extra").fadeIn();
    $("#card").animate({height: "120px" })
});

$("#btn-enfase").click(function(){
    $("#card").animate({
        opacity: "10%"}).animate({
            opacity: "100%"}).animate({
                height: "1px"}).animate(
                    {height: "1000px"})
})

$("#btn-ocultar").click(function(){
    $("#card").fadeToggle();
    $("#btn-ocultar").fadeOut();
})