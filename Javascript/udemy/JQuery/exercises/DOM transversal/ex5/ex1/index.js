
$(document).ready(function(){
    $(".comprar").on("click",function(){
       $("nome").css("color","green") 
    })
})







//Nova Ferramenta: .closest()
//Em vez de fazeres .parent().parent().parent() (que é confuso), podes usar o .closest(".classe"). 
//Ele sobe a árvore até encontrar o primeiro elemento com aquela classe. É muito mais seguro!