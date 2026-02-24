$("input").on("click",function(){
    $(this).parent().css("background-color","yellow")
    $(this).siblings(".erro").hide();
})

//Nova função aprendida hide()