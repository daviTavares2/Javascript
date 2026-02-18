//O Problema: Temos uma caldeira que aquece água. Eu preciso de uma ferramenta onde eu coloco a 
//temperatura dela e, assim que o sistema ler esse valor, ele execute uma ação que eu vou escolher na hora
 //como imprimir um relatório ou apitar).

//O que eu quero que faças no código:

//Cria o sistema que recebe esses dois dados: a temperatura e a minha ordem (o que deve ser feito).

//Faz o sistema criar um documento interno com a temperatura e a palavra "Estável".

//Garante que o sistema entregue esse documento à minha ordem para que ela seja cumprida.

//Faz um teste aí: finge que a temperatura é 90 e, 
//como ordem, faz o sistema escrever no ecrã: "Chefe, a caldeira está em 90 graus".
function maquina(temp, acao) {

    
    const documento = {
        temperatura: temp,
        status: "Estavel"
    };

    acao(documento); // A máquina envia o documento para a ação
}

maquina(90, function(relatorio) { 
    // Agora usamos 'relatorio' (ou qualquer nome que escolheres)
    // E acedemos a '.temperatura' (o nome que deste lá em cima)
    console.log("Chefe a caldeira está a " + relatorio.temperatura + " graus.");
});