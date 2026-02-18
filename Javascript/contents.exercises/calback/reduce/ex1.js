const notas = [1, 2, 3];

// 1. O reduce APENAS SOMA
const somaTotal = notas.reduce((a, b) => a + b, 0);

// 2. A média é feita DEPOIS, com o total na mão
const media = somaTotal / notas.length;

console.log(media); // Resultado: 2