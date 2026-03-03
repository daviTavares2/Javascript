
$(document).ready(function(){

    $("#btn-executar").click(function(){
        $(this).animate({
            width: "300px", 
            left: "150px",
            opacity: "0,5"},2000)
    });
 
})

//3. A Sintaxe Básica
//A estrutura do comando é:
//$(seletor).animate({ propriedades }, velocidade);