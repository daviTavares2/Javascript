const button = $("button");

    $(".btn-check").on("click",function(){
        $(this).siblings("span").css("text-decoration","line-through");
    })
    $(".btn-delete").on("click",function(){
        $(this).parent().remove();
    })
