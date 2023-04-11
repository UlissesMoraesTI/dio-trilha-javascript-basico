sorteio = [5, 50, 10, 98, 23];

let numeroMaior = [1];

for (let i = 0; i < sorteio.length; i++) {

    if (sorteio[i] > numeroMaior) {
        numeroMaior = sorteio[i];
    }
}

console.log('Maior Número Sorteado: ', numeroMaior);
