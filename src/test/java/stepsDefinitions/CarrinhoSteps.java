package stepsDefinitions;

import io.cucumber.java.pt.Dado;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.CelularPage;
import pageObjects.ProdutosPage;
import pageObjects.SacolaPage;

import static org.junit.Assert.assertEquals;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class CarrinhoSteps {
	@Dado("que eu esteja acessando o sistema")
	public void queEuEstejaAcessandoOSistema() {

	}

	@Quando("eu pesquisar o produto desejado")
	public void euPesquisarOProdutoDesejado() throws Exception {
		Na(ProdutosPage.class).buscarProduto();
	}

	@Entao("o sistema apresenta a tela com os produtos relacionados e desejados")
	public void oSistemaApresentaATelaComOsProdutosRelacionadosEDesejados() {
		assertEquals("celular", driver.findElement(By.xpath("//h1[@title='celular']")).getText());
	}

	@Quando("clicar no produto desejado")
	public void clicarNoProdutoDesejado() throws Exception {
		Na(ProdutosPage.class).selecionarCelular();
	}

	@Quando("clicar em adicionar a sacola")
	public void clicarEmAdicionarASacola() throws Exception {
		Na(CelularPage.class).acionarBotaoSacola();
	}

	@Quando("clicar em continuar")
	public void clicarEmContinuar() throws Exception {
		Na(CelularPage.class).acionarBotaoContinuar();
	}

	@Entao("o sistema exibe o carrinho de compras")
	public void oSistemaExibeOCarrinhoDeCompras() {
		assertEquals("Sacola", driver.findElement(By.xpath("//div[@class='BasketPage-title']")).getText());
	}

	@Dado("que eu esteja com o item desejado adicionado ao carrinho")
	public void queEuEstejaComOItemDesejadoAdicionadoAoCarrinho() {

	}

	@Quando("eu clicar na quantidade de produtos e alterar")
	public void euClicarNaQuantidadeDeProdutosEAlterar() throws Exception {
		Na(SacolaPage.class).alterarQuantidade();
	}

	@Entao("o sistema exibe a nova quantidade de produtos existente no carrinho")
	public void oSistemaExibeANovaQuantidadeDeProdutosExistenteNoCarrinho() throws Exception {
		Thread.sleep(1000);
		assertEquals("2", driver.findElement(By.xpath("//option[@value='2']")).getText());
	}

	@Quando("clicar em excluir")
	public void clicarEmExcluir() {
		Na(SacolaPage.class).acionarBotaoRemover();
	}

	@Entao("o sistema exibe o carrinho de compras vazio")
	public void oSistemaExibeOCarrinhoDeComprasVazio() {
		assertEquals("Sua sacola está vazia", driver.findElement(By.xpath("//div[@class='EmptyBasket-title']")).getText());
	}

}
