//Função Principal: tentarLogin(usuario, senha, acao).

//Lógica Interna: * Se a senha for "1234", cria um objeto resultado com: status: "Sucesso" e mensagem: "Bem-vindo!".

//Se a senha for qualquer outra coisa, o objeto resultado deve ter: status: "Erro" e mensagem: "Senha errada".

//A Entrega: Envia esse objeto resultado para a callback.

//O teu Teste: Chama a função duas vezes:

//Uma com a senha correta.

//Outra com a senha errada. Na callback, faz um console.log que mostre apenas a mensagem que o sistema devolveu.


//Sistema de Login com Verificação Eu quero um sistema onde eu coloco o nome do utilizador e a senha.



function tentarLogin(usuario, senha ,acao){
    let resultado;
     

    if (typeof senha === "number" && senha === 1234){
         resultado = {mensagem: "Sucesso!", autorizacao : true};
    } else {
        resultado = {mensagem: "Error!",autorizacao : false}
        } 

    acao(resultado);
 }

    tentarLogin("Davi",1234,function(relatorio){
     console.log(relatorio.mensagem);
 })

