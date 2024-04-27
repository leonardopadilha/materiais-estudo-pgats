const WebDriver = require('selenium-webdriver');
const assert = require('node:assert');

describe('Login da Lojginha', () => {
    it("Validar que é possível logar usando credenciais válidas", async () => {
        const navegador = new WebDriver
                                .Builder()
                                .forBrowser(WebDriver.Browser.CHROME)
                                .build();

        await navegador.get("http://165.227.93.41/lojinha-web/v2/")
        await navegador.findElement(WebDriver.By.id('usuario')).sendKeys('admin')
        await navegador.findElement(WebDriver.By.id('senha')).sendKeys('admin')
        await navegador.findElement(WebDriver.By.css('.btn')).click()

        const urlAtual = await navegador.getCurrentUrl();
        const urlEsperada = "http://165.227.93.41/lojinha-web/v2/produto";

        assert.deepEqual(urlAtual, urlEsperada);
        await navegador.quit();
    })
})