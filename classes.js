class pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const ulisses = new pessoa();
ulisses.nome = 'Ulisses Moraes';
ulisses.idade = 48;

const renan = new pessoa();
renan.nome = 'Renan Paula';
renan.idade = 30;

const vitor = new pessoa();
vitor.nome = 'Vitor Guerra';
vitor.idade = 25;

ulisses.descrever();
renan.descrever();
vitor.descrever();
