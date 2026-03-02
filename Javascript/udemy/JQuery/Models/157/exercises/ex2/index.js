const semaforo = $("#semaforo");

semaforo.after("<button id ='final'>Pare</button>");
semaforo.after("<button>Atenção</button>");
semaforo.after("<button >Siga</button>");
$("#final").after("<h1 id = 'historico'>Historico</h1>");


$("button").click(function(){
   
   const valorBotao = $(this).text();
   const horaAtual = new Date().toLocaleTimeString();

    if(valorBotao === "Pare"){
         $("#semaforo").css("background-color","red");
             $("#historico").after("<p>O Semaforo mudou para "+'Vermelho '+"as "+horaAtual+"  </p>")
    }
    else if(valorBotao === "Atenção"){
          $("#semaforo").css("background-color","yellow");
             $("#historico").after("<p>O Semaforo mudou para "+'Amarelo '+"as "+horaAtual+"  </p>")
    } 
    else{
          $("#semaforo").css("background-color","green");
             $("#historico").after("<p>O Semaforo mudou para "+'Verde '+"as "+horaAtual+"  </p>")
    }
    

})

