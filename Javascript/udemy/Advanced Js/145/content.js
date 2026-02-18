//HIGHER ORDER FUNCTION
//O que são Higher-Order Functions?
////Uma função de ordem superior é uma função que faz pelo menos uma destas duas coisas:

//Recebe outra função como argumento (como o addEventListener faz).

//Retorna uma nova função.

//O Panorama Geral
//No JavaScript, funções são tratadas como "cidadãos de primeira classe". 

//Isso significa que podes passá-las de um lado para o outro como se fossem números ou textos.

function anotherAddEventListener(typeOfEvent, callback) {
    // 1. Simulação de um evento que o navegador detectou
    let eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }

    // 2. Verificação: O evento que ocorreu é o que estamos à espera?
    if(eventThatHappened.eventType === typeOfEvent) {
        
        // 3. A MAGIA: Chamamos a função 'callback' e 
        // passamos o objeto do evento para dentro dela!
        callback(eventThatHappened);
    }
}



