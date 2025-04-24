// src/produto.test.ts

import { Produto } from "../src/Produto";

describe('Classe Produto', () => {
    let produto: Produto;

    beforeEach(() => {
        produto = new Produto('Camiseta', 25.99, 50, null);
    });

    describe('Produto', () => {

        test('o nome do produto deve possuir pelo menos 3 caracteres na sua criação através do construtor', () => {
            expect(() => {new Produto("pc",5,50, null)}).toThrow();
        });
        test('o preço do produto deve ser maior que zero na sua criação através do construtor', () => {
            expect(() => {new Produto('Camiseta', 0, 50, null)}).toThrow();
        });
        test('o estoque do produto deve ser maior ou igual a zero na sua criação através do construtor', () => {
            expect(() => {new Produto('Camiseta', 5, -1, null)}).toThrow();
        });
        test('o preço promocional deve ser nulo na sua criação através do construtor', () => {
            expect(() => {new Produto('Camiseta', 15, 50, 0)}).toThrow();
        });
        test('deve criar um produto com nome, preço e estoque corretos', () => {
            produto = new Produto('Camiseta', 25.99, 50, null);
            expect(produto.nome).toBe('Camiseta');
            expect(produto.preco).toBe(25.99);
            expect(produto.estoque).toBe(50);
        });
    }

    );

    describe('método definirPrecoPromocional', () => {
        test('deve definir o preço promocional se for menor que o preço original e não negativo', () => {
            produto.definirPrecoPromocional(24)

            expect(produto.precoPromocional).toBe(24);
            expect(produto.obterPrecoFinal()).toBe(24);
        });

        test('não deve definir o preço promocional se for maior ou igual ao preço original', () => {
            produto.definirPrecoPromocional(30.00);
            //TODO: Asserção para verificar se o preço promocional permaneceu nulo (ok)
            expect(fail); //substituir por asserção correta
            produto.definirPrecoPromocional(25.99);
            //TODO: Asserção para verificar se o preço promocional permaneceu nulo
            expect(fail); //substituir por asserção correta
        });

        test('não deve definir o preço promocional se o novo preço for negativo', () => {
            produto.definirPrecoPromocional(-5.00);
            //TODO: Asserção para verificar se o preço promocional permaneceu nulo
            expect(fail); //substituir por asserção correta
        });
    });

    describe('método obterPrecoFinal', () => {
        test('deve retornar o preço promocional se estiver definido', () => {
            produto.definirPrecoPromocional(19.99);
            // Falta a asserção para verificar o preço final
            expect(fail); //substituir por asserção correta
        });

        test('deve retornar o preço original se o preço promocional não estiver definido', () => {
            // Falta a asserção para verificar o preço final
            expect(fail); //substituir por asserção correta
        });
    });

    describe('método vender', () => {
        test('deve realizar a venda e atualizar o estoque corretamente', () => {
            // Montar cenário


            // Realizar asserção correta
            expect(fail); //substituir por asserção correta
        });

        test('deve retornar "Estoque insuficiente." se a quantidade vendida for maior que o estoque', () => {
            const mensagem = produto.vender(60);

            expect(produto.estoque).toBe(50);
            expect(mensagem).toBe('Estoque insuficiente.');
        });

        test('deve retornar "Quantidade inválida." se a quantidade vendida for zero ou negativa', () => {
            // Montar cenário


            // Realizar asserção correta
            expect(fail); //substituir por asserção correta
        });
    });

    describe('método adicionarEstoque', () => {
        test('deve adicionar a quantidade ao estoque corretamente', () => {
            const mensagem = produto.adicionarEstoque(20);

            expect(produto.estoque).toBe(70);
            expect(mensagem).toBe('Adicionado 20 unidades de Camiseta ao estoque. Novo estoque: 70.');
        });

        test('deve retornar "Quantidade inválida." se a quantidade adicionada for negativa', () => {
            // Montar cenário


            // Realizar asserção correta
            expect(fail); //substituir por asserção correta
        });
    });
});