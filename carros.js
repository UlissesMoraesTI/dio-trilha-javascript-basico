/**
 * Classe - Carros
 * - Marca
 * - Cor
 * - Gasto Médio de Combustível por KM Rodado
 * 
 * Objetivo: Criar Método que dado a quantidade de quilómetros e o preço 
 * do combustível nos dê o valor gasto em reais para realizar o percurso.
 */
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const siena = new Carro('Siena', 'Preta', 1 / 12);
console.log(siena.calcularGastoDePercurso(70, 5));

const palio = new Carro('Palio', 'Preta', 1 / 10);
console.log(palio.calcularGastoDePercurso(70, 5));
