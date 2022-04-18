package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;

public class ProdutosPage {

	public static WebDriver driver;

	@FindBy(xpath = "//input[@id='input-search']")
	private WebElement barraPesquisa;

	@FindBy(xpath = "//*[@data-testid=\"search-submit\"]")
	private WebElement botaoPesquisar;

	@FindBy(xpath = "//img[@data-testid='image'][@title='Smartphone Samsung Galaxy A03 Core 32GB Azul 4G ']")
	private WebElement celular;

	public void buscarProduto() throws Exception {
		barraPesquisa.sendKeys("celular");
		botaoPesquisar.click();
	}

	public void selecionarCelular() throws Exception {
		Thread.sleep(3000);
		celular.click();
	}

}
