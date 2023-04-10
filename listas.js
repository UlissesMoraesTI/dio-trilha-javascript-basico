/**
 * Listas - Tratamento
 * push   - Adicionar Item a Lista
 * length - Tamanho da Lista  
 */

let notas = [];
let somarNotas = 0;
/**
 * Comando push
 */
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

for (let i = 0; i < notas.length; i++) {
    somarNotas = somarNotas + notas[i];
}

let notaMedia = somarNotas / notas.length;
console.log('Média: ' + notaMedia);
console.log(notas.length);
