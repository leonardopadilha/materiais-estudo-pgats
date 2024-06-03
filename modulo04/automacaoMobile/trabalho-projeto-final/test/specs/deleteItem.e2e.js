import 'dotenv/config'
import LoginPage from '../pageobjects/login.page.js'
import ProductListPage from '../pageobjects/productList.page.js'
import CreateProductPage from '../pageobjects/createProduct.page.js'

const loginPage = new LoginPage()
const productListPage = new ProductListPage()
const createProductPage = new CreateProductPage()

const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const PRODUCT_LIST = process.env.PRODUCT_LIST

beforeEach(async () => {
    await loginPage.login(USER, PASSWORD)
    await productListPage.accessProductListScreen(PRODUCT_LIST)
    await productListPage.clickOnAddProduct()
});

describe('Delete item on product list screen', async () => {
    it('[APP - CT02] - Should delete item from product list', async () => {
        await createProductPage.verifyTitleAddProduct()
 
        await createProductPage.createProduct("Celular", "1000,00", "Prata")
        await createProductPage.clickOnSaveProduct()
        await createProductPage.verifyTitleEditProduct()
        await createProductPage.clickOnReturnToProductList()

        await productListPage.clickOnTrashButton()
        await productListPage.confirmDeleteWithSuccess()
    })
})

