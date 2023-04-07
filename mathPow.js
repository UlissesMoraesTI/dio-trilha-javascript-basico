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
 */

const peso = 93;
const altura = 1.71;

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('Abaixo do Peso - ' + imc.toFixed(2));
} else if (imc >= 18.5 && imc <= 25.0) {
    console.log('Normal - ' + imc.toFixed(2));
} else if (imc > 25.0 && imc <= 30.0) {
    console.log('Acima do Peso - ' + imc.toFixed(2));
} else if (imc > 30.0 && imc <= 40.0) {
    console.log('Obeso - ' + imc.toFixed(2));
} else {
    console.log('Obesidade Grave - ' + imc.toFixed(2));
}

const mult = altura * altura;
console.log('Multiplicação - ' + mult + ' - Formula: altura * altura');

mathPow = Math.pow(altura, 2);
console.log('Math.pow......- ' + mathPow + ' - Formula: Math.pow(altura, 2)');
