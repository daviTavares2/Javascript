function Pedidos(nome,pedido,preco){
    this.nome = nome;
    this.pedido = pedido;
    this.preco = preco;
    this.greet = function(){
        console.log("nome: "+this.nome+"\npedido: "+this.pedido+"\npreco: "+this.preco);
    }
}
let pessoa1 = new Pedidos('Davi',"x-bacon",19.99);

