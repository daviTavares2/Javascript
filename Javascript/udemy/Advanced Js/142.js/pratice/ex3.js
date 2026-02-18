


function PedidoDelivery(id,valorPedido,distanciaKm){
   this.id = id;
   this.valorPedido = valorPedido;
   this.distanciaKm = distanciaKm;
    this.finalizarEntrega = function(){
    const comissaoTotal = 5 + (2*this.distanciaKm);
      console.log("O entregador "+this.nome+" entregou o pedido "+this.id+" e ganhou R$ "+this.comissaoTotal+" de comissão.");
    }
}

function Entregador(nome,veiculo){
    this.nome = nome;
    this.veiculo = veiculo; 
}

let motoboy1 = new Entregador("Davi","Moto");
let pedido1 = new PedidoDelivery("23313",20.99,2);
pedido1.finalizarEntrega();

////////////////////////////////////CORREÇÃO/////////////////////////////////////////////////

// 1. O molde do Pedido (apenas armazena os dados)
function PedidoDelivery(id, valorPedido, distanciaKm) {
    this.id = id;
    this.valorPedido = valorPedido;
    this.distanciaKm = distanciaKm;
}

// 2. O molde do Entregador (quem executa a ação)
function Entregador(nome, veiculo) {
    this.nome = nome;
    this.veiculo = veiculo;
    this.comissaoTotal = 0; // Começa zerado

    // O método recebe o objeto 'pedido' como parâmetro
    this.finalizarEntrega = function(pedido) {
        // Cálculo: 5 fixo + 2 por KM (buscando os dados de dentro do objeto pedido)
        const ganhoNestaEntrega = 5 + (2 * pedido.distanciaKm);
        
        // Acumula o valor no saldo do entregador
        this.comissaoTotal += ganhoNestaEntrega;

        console.log("--------------------------------------------------");
        console.log(`O entregador ${this.nome} entregou o pedido ${pedido.id}.`);
        console.log(`Distância percorrida: ${pedido.distanciaKm}km.`);
        console.log(`Ganho desta entrega: R$ ${ganhoNestaEntrega.toFixed(2)}`);
        console.log(`Saldo total de comissões: R$ ${this.comissaoTotal.toFixed(2)}`);
        console.log("--------------------------------------------------");
    };
}

// --- TESTANDO O SISTEMA ---

// Criando o entregador
const motoboy1 = new Entregador("Davi", "Moto");

// Criando dois pedidos com distâncias diferentes
const pedidoA = new PedidoDelivery("101", 50.00, 2); // 2km -> deve ganhar 9 reais
const pedidoB = new PedidoDelivery("102", 35.00, 10); // 10km -> deve ganhar 25 reais

// Executando as entregas
motoboy1.finalizarEntrega(pedidoA);
motoboy1.finalizarEntrega(pedidoB);


//A Lógica:

//Crie um método no Entregador chamado finalizarEntrega(pedido).

//Regra de Negócio: A comissão do entregador é R$ 5,00 fixa + R$ 2,00 por cada KM percorrido no pedido.

//O método deve somar esse valor à comissaoTotal do entregador.

//No final, use um console.log para mostrar: "O entregador [nome] entregou o pedido [id] e ganhou R$ [valor] de comissão."