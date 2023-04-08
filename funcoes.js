/**
 * IMC - Indice de Massa Corporal - Critério da Organização Mundial de Saúde
 * 
 * Fórmula: IMC = peso / (altura * altura)
 * 
 *  < 18.5            = Abaixo do Peso;
 * >= 18.5 && <= 25.0 = Normal;
 *  > 25.0 && <= 30.0 = Acima do Peso;
 *  > 30.0 && <= 40.0 = Obeso;
 *  > 40.0            = Obsesidade Grave;   * 
 * 
 *  Técnico: Confira também o cálculo com o uso do Math.pow
 */

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {

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

function main() {
    const peso = 93;
    const altura = 1.71;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();
