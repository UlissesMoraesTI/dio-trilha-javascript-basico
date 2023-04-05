/**
 * === Comparar Igualdade são 3 iguais
 */

const numero = 0;
/* Cálculo via MOD % 2 */
const numeroPar = (numero % 2) === 0;

/**
 * Primeira Opção de IF INDEPENDENTE
 */
if (numeroPar) {
    console.log("Numero 1-PAR");
}

if (!numeroPar) {
    console.log("Numero 1-IMPAR");
}

/**
 * Segunda opção IF COM ELSE
 */
if (numeroPar) {
    console.log("Numero 2-PAR");
} else {
    console.log("Numero 2-IMPAR");
}

/**
 * Análise Divisível por 5
 */

/* Cálculo via MOD % 5 */
const numeroDivisivelPor5 = (numero % 5 == 0);
/**
 * Terceira opção de IF ENCADEADO * 
 */
if (numero === 0) {
    console.log('Número Inválido!');
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}
