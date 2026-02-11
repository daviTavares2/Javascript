//HIGHER ORDER FUNCTION
//O que são Higher-Order Functions?
////Uma função de ordem superior é uma função que faz pelo menos uma destas duas coisas:

//Recebe outra função como argumento (como o addEventListener faz).

//Retorna uma nova função.

//O Panorama Geral
//No JavaScript, funções são tratadas como "cidadãos de primeira classe". 

//Isso significa que podes passá-las de um lado para o outro como se fossem números ou textos.

// A função que será chamada mais tarde (Callback)
function respondToKey(event) {
    console.log("Tecla pressionada: " + event.key);
}

// O addEventListener é a Higher-Order Function
// Ele recebe o nome da função 'respondToKey' como argumento
document.addEventListener("keypress", respondToKey);

    //DurationOfKeyPress
    //eventType
    //TypeOfEvent