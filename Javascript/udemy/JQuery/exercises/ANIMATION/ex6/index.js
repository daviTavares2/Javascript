$("#btn-menu").click(function(){
    $("#menu-lateral").animate({width: "250px"}).text("Fechar Menu");
});

$("#btn-menu").click(function(){
    $("#menu-lateral").animate({width: "0"}).text("Abrir Menu");
});

$("#btn-alerta").click(function(){
    $("#menu-lateral").show().animate({opacity: "50%"}).animate({opacity: "100%"}).animate({height: "50%"}).animate({height: "100%"});
});

