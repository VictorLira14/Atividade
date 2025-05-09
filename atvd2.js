class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

mostrarDados(){
    console.log(`produtos ${this.nome}, preco${this.preco}, quantidade ${this.quantidade}`);
    
}

vender(qnt){
    if(qnt <= this.quantidade)
        this.quantidade -= qnt;
    console.log(`venda realizada. quantidade atual ${this.quantidade}`)


}

}



