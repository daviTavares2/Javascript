//"Davi, preciso de um sistema para a nossa loja. O cliente escolhe um produto,
 //o preco e a quantidade. O sistema deve calcular o total e aplicar um desconto se a compra for grande."

 function processoCompra(produto , preco , quantidade , acao){
    let valorBruto = preco * quantidade;
    let desconto = 0;
      
    if (valorBruto > 1000 ) {
        desconto = valorBruto * 0.10;
    }
    
   const relatorio = {
        nome : produto,
        total : valorBruto - desconto,
    }
    
    acao(relatorio);
 }

 processoCompra("jbl",800,2,function(resposta){
    console.log("------Tabela------");
    console.log(resposta.nome);
    console.log(resposta.total);
    
 })