function escreverNome(nome) {
    return 'Meu nome é ' + nome;
};

function verificarMaiorIdade(idade) {

    if (idade >= 18) {
        return ' sou Maior de Idade';
    } else {
        return ' sou Menor de Idade';
    }
};

(function () {
    console.log(escreverNome('Ulisses Moraes') + verificarMaiorIdade(48));
})();