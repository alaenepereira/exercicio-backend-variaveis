//let i = ((y/c)-1); taxa de juros
let capitalInicial = 60000;
let meses = 24;
let montante = 90000;




let juros = Math.pow((montante / capitalInicial), (1 / meses))-1
let resultado = juros * 100;
console.log(`O seu financiamento de 60000 reais teve uma taxa de juros de ${resultado.toFixed(3)}, pois após 24 meses você teve que pagar 90000 reais.`);

