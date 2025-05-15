class Produto{
    constructor(nome,preco,quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
}
mostrarDados(){
    console.log(`O produto ${this.nome} custa ${this.preco} e tem ${this.quantidade} no estoque`);

}
vender(qtd){
    if(qtd <= this.quantidade){
        this.quantidade -= qtd;
        console.log(`Venda realizada, restou ${this.quantidade} quantidades em estoque`);

    }
}
repor(qtd){
    this.quantidade += qtd;
    console.log(`Quantidade em estoque ${this.quantidade} quantidades`);
}

}

let produto = new Produto("lapis",2.6,100);
produto.mostrarDados();
//produto.vender(40);
//produto.repor(20);





