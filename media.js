/**
 * Regras:
 * - Média menor 5     = REPROVADO;
 * - Média entre 5 e 7 = RECUPERACAO;
 * - Média acima 7     = APROVADO;
 */

const nota1 = 7.1;
const nota2 = 7.0;
const nota3 = 7.0;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("Aluno REPROVADO - nota: " + media.toFixed(2));
} else if (media >= 5 && media <= 7) {
    console.log("Aluno RECUPERACAO - nota: " + media.toFixed(2));
} else {
    console.log("Aluno APROVADO - nota: " + media.toFixed(2));
}
