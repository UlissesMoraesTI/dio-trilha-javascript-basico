const pessoa = {
    nome: 'Ulisses Moraes',
    idade: 48,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();
