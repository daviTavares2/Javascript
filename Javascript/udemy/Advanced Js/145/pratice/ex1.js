//O teu objetivo: Criar um sistema que formate uma mensagem de boas-vindas de formas diferentes
// (gritando, sussurrando ou normal), usando uma funcao principal que recebe outra funcao.

const mensagem = "Bom Dia!";

function gritar(text){
    console.log(text.toUpperCase());
}

function sussurrando(text){
    console.log(text.toLowerCase());
}

function normal(text){
    console.log(text);
}

function principal(texto ,acao){
    acao(texto);
}

principal(mensagem , prompt("gritar, sussurando ou normal"));