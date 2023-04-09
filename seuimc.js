/**
 * Classe para representar pessoa
 * - Nome
 * - Peso
 * - Altura
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do Peso';
        } else if (imc >= 18.5 && imc <= 25.0) {
            return 'Normal';
        } else if (imc > 25.0 && imc <= 30.0) {
            return 'Acima do Peso';
        } else if (imc > 30.0 && imc <= 40.0) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarImc(jose.calcularImc));

const ulisses = new Pessoa('Ulisses', 93, 1.71);
console.log(ulisses);
console.log(ulisses.calcularImc());
console.log(ulisses.classificarImc(ulisses.calcularImc));
