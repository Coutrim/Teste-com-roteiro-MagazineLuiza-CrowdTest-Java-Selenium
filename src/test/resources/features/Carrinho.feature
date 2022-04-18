#language: pt
#encoding: UTF-8

Funcionalidade: Utilizar carrinho da loja


@BuscarProdutos
Cenario: Realizar busca por um produto

Dado que eu esteja acessando o sistema
Quando eu pesquisar o produto desejado
Entao o sistema apresenta a tela com os produtos relacionados e desejados

@AdicionarProdutos
Cenario: Adicionar produtos ao carrinho 

Dado que eu esteja acessando o sistema
Quando eu pesquisar o produto desejado
E clicar no produto desejado
E clicar em adicionar a sacola
E clicar em continuar
Entao o sistema exibe o carrinho de compras

@AlterarQuantidade
Cenario: Alterar quantidade de produtos
  
Dado que eu esteja acessando o sistema
Quando eu pesquisar o produto desejado
E clicar no produto desejado
E clicar em adicionar a sacola
E clicar em continuar
E eu clicar na quantidade de produtos e alterar
Entao o sistema exibe a nova quantidade de produtos existente no carrinho

@RemoverProdutos
Cenario: Remover produto do carrinho
  
Dado que eu esteja acessando o sistema
Quando eu pesquisar o produto desejado
E clicar no produto desejado
E clicar em adicionar a sacola
E clicar em continuar
E clicar em excluir
Entao o sistema exibe o carrinho de compras vazio



