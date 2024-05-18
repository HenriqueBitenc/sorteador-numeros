# Sorteador de Números

Esta aplicação web sorteia uma quantidade especificada de números aleatórios dentro de um intervalo definido pelo usuário. É desenvolvida utilizando JavaScript, HTML e CSS. Este projeto foi desenvolvido
através da plataforma da Alura, sendo o foco da aula o desenvolvimento das aplicações em JS, todo o HTML e CSS foram disponibilizados prontos.

## Funcionalidades

- Sorteio de números aleatórios sem repetição.
- Validação dos valores de entrada para garantir a integridade do sorteio.
- Reset dos campos de entrada e do resultado.

## Estrutura do Código

O código principal está contido em um arquivo JavaScript que realiza as seguintes funções:

### Função `sortear()`

Esta é a função principal que controla o sorteio de números. Ela realiza as seguintes ações:

1. **Declaração de Variáveis:**
   - `quantidade`: número de números a serem sorteados.
   - `de`: limite inferior do intervalo.
   - `ate`: limite superior do intervalo.
   - `novoTexto`: array que armazena os números sorteados.

2. **Validações:**
   - Verifica se o valor 'de' é menor que 'ate'.
   - Verifica se a quantidade de números sorteados não excede o intervalo disponível.

3. **Sorteio dos Números:**
   - Itera de acordo com a quantidade especificada, sorteando números aleatórios e garantindo que não haja repetição.

4. **Exibição do Resultado:**
   - Atualiza o elemento HTML para mostrar os números sorteados.

5. **Reset dos Campos:**
   - Habilita o botão de reset para permitir um novo sorteio.

### Função `sortearNumeroAleatorio(de, ate)`

Gera um número aleatório dentro do intervalo especificado.

### Função `reiniciar()`

Reseta todos os campos de entrada e exibe a mensagem indicando que nenhum número foi sorteado.

## Estrutura do HTML

O HTML contém os seguintes elementos:

- **Entradas de Dados:**
  - `quantidade`: campo para o usuário inserir a quantidade de números a serem sorteados.
  - `de`: campo para o limite inferior do intervalo.
  - `ate`: campo para o limite superior do intervalo.

- **Botões:**
  - Botão para iniciar o sorteio.
  - Botão para resetar os campos.

- **Exibição de Resultados:**
  - Elemento para mostrar os números sorteados ou uma mensagem de status.

## Como Usar

Primeiramente abra o arquivo .html no navegador.

1. **Insira os Valores:**
   - Digite a quantidade de números a serem sorteados.
   - Digite o limite inferior (`de`) e o limite superior (`ate`) do intervalo.

2. **Clique no Botão de Sorteio:**
   - O resultado será exibido no elemento designado para os resultados.

3. **Resetar:**
   - Clique no botão de reset para limpar os campos e realizar um novo sorteio.

*Este arquivo README foi gerado com a ajuda de uma Inteligência Artificial.*
