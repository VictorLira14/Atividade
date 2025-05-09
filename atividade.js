class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

//Teste
let p1 = new Pessoa("Maria",  "16");
let p2 = new Pessoa("João",  "20");
let p3 

p1.apresentar();
p2.apresentar();
