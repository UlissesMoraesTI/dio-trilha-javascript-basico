/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis:

1 - Preço do Combustível;
2 - Gasto Médio de Combustível por KM;
3 - Distância em KM da viagem;
*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

const litrosComsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosComsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
