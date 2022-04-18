package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CelularPage {
	@FindBy(xpath = "//button[@class='button__buy button__buy-product-detail js-add-cart-button js-main-add-cart-button js-add-box-prime']")
	private WebElement botaoSacola;

	@FindBy(xpath = "//div[@class='container-button-banner']")
	private WebElement botaoCookies;

	@FindBy(xpath = "//a[@class='price-warranty__btn--continue btn-buy-warranty']")
	private WebElement botaoContinuar;

	public void acionarBotaoSacola() throws Exception {
		Thread.sleep(1000);
		botaoCookies.click();
		botaoSacola.click();
	}

	public void acionarBotaoContinuar() throws Exception {
		Thread.sleep(2000);
		botaoContinuar.click();
	}
}
