/**
 *  Faça um programa para calcular o valor de uma viagem.
 * 
 * Você terá 5 variáveis:
 * 
 * 1 - Preço do Combustível etanol;
 * 2 - Preço do Combustível gasolina;
 * 3 - Tipo de Combustível 
 * 4 - Gasto Médio de Combustível por KM;
 * 5 - Distância em KM da viagem; 
 */
const precoCombustivelEtanol = 5.79;
const precoCombustivelGasolina = 6.66;

const tipoCombustivel = 'Gasolina';

const kmPorLitroEtanol = 10;
const kmPorLitroGasolina = 10;

const distanciaEmKm = 100;

const litrosComsumidosEtanol = distanciaEmKm / kmPorLitroEtanol;
const litrosComsumidosGasolina = distanciaEmKm / kmPorLitroGasolina;

if (tipoCombustivel === 'Etanol') {
    const valorGastoComEtanol = litrosComsumidosEtanol * precoCombustivelEtanol;
    console.log(valorGastoComEtanol.toFixed(2));
} else {
    const valorGastoComGasolina = litrosComsumidosGasolina * precoCombustivelGasolina;
    console.log(valorGastoComGasolina.toFixed(2));
}

