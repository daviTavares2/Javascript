//calcular media
//media < 7 reprovado

function gestaoEscola(nome , n1 , n2 , acao){
    let media = Number(n1 + n2) /2;

    const aluno = {
        nome: nome,
        status : media > 7 ? "Aprovado":"Reprovado"
    }

    acao(aluno);
}

gestaoEscola("Davi", 6.0, 7.0 , function(resposta){
   console.log(resposta.status);
});