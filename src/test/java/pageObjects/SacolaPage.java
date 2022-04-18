package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SacolaPage {
	@FindBy(xpath = "//option[@value='2']")
	private WebElement alterarQuantidade;

	@FindBy(xpath = "//select[@class='BasketItemProduct-quantity-dropdown']")
	private WebElement selectQuantidade;

	@FindBy(xpath = "//span[@class='BasketItem-delete-label']")
	private WebElement botaoExcluir;

	public void alterarQuantidade() throws Exception {
		Thread.sleep(2000);
		selectQuantidade.click();
		alterarQuantidade.click();
	}

	public void acionarBotaoRemover() {
		botaoExcluir.click();
	}
}
