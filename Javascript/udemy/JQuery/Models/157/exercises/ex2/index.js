const semaforo = $("#semaforo");

semaforo.prepend("<h1>Semaforo</h1>") 

semaforo.append("<button>Pare</button>");
semaforo.append("<button>Atenção</button>");
semaforo.append("<button>Siga</button>");

$("button").click(function(){
   
   const valorBotao = $(this).text();
   
    if(valorBotao === "Pare"){
        semaforo.css("color","red");
    }
    else if(valorBotao === "Atenção"){
        semaforo.css("color","red");
    } 
    else{
        semaforo.css("color","red");
    }
    
})
















//before(): element before 

//after(); element after

//prepend(): <h1><element> content <h1>

//append(): <h1> content <element><h1>

//remove() : remove element

//new Date()toLocateTimeString : add Time