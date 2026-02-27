
$(document).ready(function(){
    $(".comprar").on("click",function(){
      $(this).closest(".produto").find(".preco").css("color","green")
    })
    $(".destaque").on("click",function(){
        $(this).closest(".produto").find(".preco").css("background-color","yellow");
    })
})





//Nova Ferramenta: .closest()
//Em vez de fazeres .parent().parent().parent() (que é confuso), podes usar o .closest(".classe"). 
//Ele sobe a árvore até encontrar o primeiro elemento com aquela classe. É muito mais seguro!