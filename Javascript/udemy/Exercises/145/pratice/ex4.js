//O que eu quero que o teu código faça:

//A Função Principal: Cria uma função chamada processarEnvio. Ela deve receber três coisas:
// o produto, o valor e a instrucao (callback).

//O Documento Interno: Dentro da função, cria um objeto chamado etiqueta. Ele deve ter o nome
 //do produto, o valor e uma propriedade chamada imposto (que é o valor multiplicado por 0.1).

//A Entrega: A função deve entregar essa etiqueta para a instrucao (callback).

//O teu Teste: Chama a função para um "Portátil" que custa 1000. Na tua callback
 //(a instrução), eu quero que tu mostres no ecrã: "Produto: [nome] | Total com imposto: [valor + imposto]".


 function processarEnvio(produto , valor , instrucao){
    const etiqueta = {
        nome : produto,
        preco : valor,
        imposto : valor * 0.1
    }

    instrucao(etiqueta);
 }

 processarEnvio("portatil",1000,function(relatorio){
        console.log("Nome: "+relatorio.nome);
        console.log("Valor: "+relatorio.preco);
        console.log("Imposto: "+relatorio.imposto);
 })