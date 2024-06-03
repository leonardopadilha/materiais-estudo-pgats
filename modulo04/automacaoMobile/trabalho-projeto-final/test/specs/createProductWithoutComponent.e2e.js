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
});

describe('Create product without component', async () => {
    it('[APP - CT04] - Should create product without components with success', async () => {
        await productListPage.clickOnAddProduct()
        await createProductPage.verifyTitleAddProduct()
 
        await createProductPage.createProduct("Televisao", "1000,00", "Cinza")
        await createProductPage.clickOnSaveProduct()
        await createProductPage.verifyTitleEditProduct()
    })
})
