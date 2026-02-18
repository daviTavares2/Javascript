
//Cria uma função chamada calculadora.

//Ela deve receber num1, num2 e uma operacao (que será a callback).

//Dentro dela, faz: operacao(num1 + num2).

//Chama a calculadora(5, 10, function(resultado) { console.log(resultado) });.
function calculadora(num1,num2, callback){
    callback(num1 + num2);

}
 calculadora (5, 10 , function(resultado){
    console.log(resultado);
 })