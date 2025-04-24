## Desafio Prático de Testes Unitários com Jest e TypeScript 


### Objetivo: 

Desenvolver habilidades de escrita de testes unitários em Jest e TypeScript para identificar e corrigir falhas em uma classe.

### Execução do projeto

#### Instalando dependências

```bash
npm i
```

#### Executando testes

```bash
npx jest
```

### Requisitos
O projeto precisa se manter com uma cobertura de testes superior a 95% e, naturalmente, todos os testes precisam estar sendo aprovados na execução.

### Instruções

#### Atividade 1 - Encontrando e corrigindo Bugs

- Desenvolva os testes que não estão desenvolvidos no arquivo de testes.
- Identique possíveis erros do código da classe testada.
- Corrija os erros identificados na classe testada.
- Garanta que todos os testes estejam sendo aprovados.
- Certifique-se de que o projeto possui a cobertura de testes esperada e, se não possuir, criei novos testes para atender ao requisito. 


#### Atividade 2 - Implementando e Testando a Funcionalidade de Aplicar Desconto

Adicionar à classe **Produto** a capacidade de **aplicar um desconto percentual** sobre o preço original do produto. Este desconto deve ser aplicado através de um novo método chamado *aplicarDesconto*. O método receberá um valor percentual (de 0 a 100) como argumento e atualizará um atributo interno que representará o desconto ativo. O método obterPrecoFinal deverá então levar em consideração este desconto, retornando o preço com o desconto aplicado. Se nenhum desconto tiver sido aplicado, o método obterPrecoFinal continuará retornando o preço original (ou o preço promocional, se estiver ativo).

##### Instruções

- Analise a nova funcionalidade proposta (aplicar desconto) e a implementação na classe Produto.
- Escreva os testes unitários dentro do bloco describe('método aplicarDesconto', ...) no arquivo produto.test.ts para garantir o comportamento correto do método aplicarDesconto em diferentes cenários (percentual válido, inválido, zero).
- Escreva os testes unitários dentro do bloco describe('método obterPrecoFinal com desconto', ...) para verificar se o método obterPrecoFinal retorna o preço correto quando um desconto é aplicado, quando não há desconto e quando há um preço promocional ativo juntamente com o desconto.
- Execute todos os testes (npm test) e corrija qualquer falha na implementação da classe Produto ou nos testes até que todos passem.

**Exemplos de testes que podem ser desenvolvidos**

- deve aplicar o desconto corretamente se o percentual for válido
- deve definir o desconto como nulo e retornar mensagem de erro se o percentual for negativo
- deve definir o desconto como nulo e retornar mensagem de erro se o percentual for maior que 100
- deve definir o desconto como nulo se o percentual for zero
- método obterPrecoFinal com desconto
- deve retornar o preço original se nenhum desconto foi aplicado
- deve aplicar o desconto sobre o preço promocional se ambos estiverem ativos