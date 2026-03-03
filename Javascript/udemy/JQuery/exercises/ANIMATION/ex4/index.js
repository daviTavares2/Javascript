//A Interface:

//Cria um título (H2) chamado "Mensagens do Sistema".
$("body").append("<h1>Mensagens do Sistema</h1>");

//Cria um botão chamado "Alternar Painel".
$("body").append("<button id = 'painel'>Alterar Painel</button>");

//Cria uma "Caixa de Alerta" (uma div com algum texto dentro).
$("body").append("<div id ='alerta'>Caixa De Alerta</div>");

//Cria um botão chamado "Focar Atenção".
$("body").append("<button id = 'focar'>Focar Atenção</button>");



//Ação A: Quando eu clicar no botão "Alternar Painel", a Caixa de Alerta deve aparecer ou desaparecer.
 //Mas atenção: não quero que ela simplesmente suma; quero um efeito de deslize ou de transparência
  //(tu escolhes qual fica mais elegante).

  $("#painel").on("click",function(){
    $("#alerta").toggle();
  })
  
  //Ação B (O Combo): Quando eu clicar no botão "Focar Atenção", quero que a Caixa de Alerta faça uma sequência de
     //movimentos para chamar a minha atenção: ela deve encolher, esticar e terminar ficando meio transparente, 
     //tudo de uma vez só.

    $("#focar").click(function(){
        $("#alerta").animate({
            width: "10px",
            width: "100px",
            opacity: "20%"
        })
    })

   // Ação C: Se eu clicar no Título (H2), ele deve desaparecer gradualmente até ficar invisível.

    $("h1").click(function(){
        $("h1").animate({
            opacity: "80%",
            opacity: "70%",
            opacity: "60%",
            opacity: "50%",
            opacity: "40%",
            opacity: "30%",
            opacity: "20%",
            opacity: "10%",
            opacity: "0%"
        })
    })