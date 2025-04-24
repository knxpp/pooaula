// src/produto.ts
class Produto {
    nome: string;
    preco: number;
    estoque: number;
    precoPromocional: number | null = null;
  
    constructor(nome: string, preco: number, estoque: number, precoPromocional: number | null) {
      this.nome = nome;
      this.preco = preco;
      this.estoque = estoque;
      this.precoPromocional = precoPromocional;

      if(nome.length < 3){
        throw new Error();
      }

      if(preco <= 0){
        throw new Error();
      }

      if (estoque < 0){
        throw new Error();
      }

      if (precoPromocional != null){
        throw new Error();
      }
    }
  
    definirPrecoPromocional(novoPreco: number): void {
      if (novoPreco < this.preco && novoPreco >= 0) {
        this.precoPromocional = novoPreco;
      } else {
        this.precoPromocional = null;
      }
    }
  
    obterPrecoFinal(): number {
      if (this.precoPromocional) {
        return this.precoPromocional;
      }
      return this.preco;
    }
  
    vender(quantidade: number): string {
      if (quantidade <= 0) {
        return "Quantidade inválida.";
      }
      if (quantidade > this.estoque) {
        return "Estoque insuficiente.";
      }
      this.estoque -= quantidade;
      return `Venda de ${quantidade} unidades de ${this.nome} realizada. Estoque restante: ${this.estoque}.`;
    }
  
    adicionarEstoque(quantidade: number): string {
      if (quantidade <= 0) {
        return "Quantidade inválida.";
      }
      this.estoque += quantidade;
      return `Adicionado ${quantidade} unidades de ${this.nome} ao estoque. Novo estoque: ${this.estoque}.`;
    }
  }
  
  export { Produto };