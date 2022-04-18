$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Carrinho.feature");
formatter.feature({
  "name": "Utilizar carrinho da loja",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Realizar busca por um produto",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@BuscarProdutos"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu esteja acessando o sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "CarrinhoSteps.queEuEstejaAcessandoOSistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pesquisar o produto desejado",
  "keyword": "Quando "
});
formatter.match({
  "location": "CarrinhoSteps.euPesquisarOProdutoDesejado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema apresenta a tela com os produtos relacionados e desejados",
  "keyword": "Entao "
});
formatter.match({
  "location": "CarrinhoSteps.oSistemaApresentaATelaComOsProdutosRelacionadosEDesejados()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar produtos ao carrinho",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@AdicionarProdutos"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu esteja acessando o sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "CarrinhoSteps.queEuEstejaAcessandoOSistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pesquisar o produto desejado",
  "keyword": "Quando "
});
formatter.match({
  "location": "CarrinhoSteps.euPesquisarOProdutoDesejado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no produto desejado",
  "keyword": "E "
});
formatter.match({
  "location": "CarrinhoSteps.clicarNoProdutoDesejado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em adicionar a sacola",
  "keyword": "E "
});
formatter.match({
  "location": "CarrinhoSteps.clicarEmAdicionarASacola()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em continuar",
  "keyword": "E "
});
formatter.match({
  "location": "CarrinhoSteps.clicarEmContinuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe o carrinho de compras",
  "keyword": "Entao "
});
formatter.match({
  "location": "CarrinhoSteps.oSistemaExibeOCarrinhoDeCompras()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Alterar quantidade de produtos",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@AlterarQuantidade"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu esteja acessando o sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "CarrinhoSteps.queEuEstejaAcessandoOSistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pesquisar o produto desejado",
  "keyword": "Quando "
});
formatter.match({
  "location": "CarrinhoSteps.euPesquisarOProdutoDesejado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no produto desejado",
  "keyword": "E "
});
formatter.match({
  "location": "CarrinhoSteps.clicarNoProdutoDesejado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em adicionar a sacola",
  "keyword": "E "
});
formatter.match({
  "location": "CarrinhoSteps.clicarEmAdicionarASacola()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em continuar",
  "keyword": "E "
});
formatter.match({
  "location": "CarrinhoSteps.clicarEmContinuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar na quantidade de produtos e alterar",
  "keyword": "E "
});
formatter.match({
  "location": "CarrinhoSteps.euClicarNaQuantidadeDeProdutosEAlterar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a nova quantidade de produtos existente no carrinho",
  "keyword": "Entao "
});
formatter.match({
  "location": "CarrinhoSteps.oSistemaExibeANovaQuantidadeDeProdutosExistenteNoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Remover produto do carrinho",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@RemoverProdutos"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu esteja acessando o sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "CarrinhoSteps.queEuEstejaAcessandoOSistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pesquisar o produto desejado",
  "keyword": "Quando "
});
formatter.match({
  "location": "CarrinhoSteps.euPesquisarOProdutoDesejado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no produto desejado",
  "keyword": "E "
});
formatter.match({
  "location": "CarrinhoSteps.clicarNoProdutoDesejado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em adicionar a sacola",
  "keyword": "E "
});
formatter.match({
  "location": "CarrinhoSteps.clicarEmAdicionarASacola()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em continuar",
  "keyword": "E "
});
formatter.match({
  "location": "CarrinhoSteps.clicarEmContinuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em excluir",
  "keyword": "E "
});
formatter.match({
  "location": "CarrinhoSteps.clicarEmExcluir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe o carrinho de compras vazio",
  "keyword": "Entao "
});
formatter.match({
  "location": "CarrinhoSteps.oSistemaExibeOCarrinhoDeComprasVazio()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
});