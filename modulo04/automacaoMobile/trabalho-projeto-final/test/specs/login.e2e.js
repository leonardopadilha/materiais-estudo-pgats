import 'dotenv/config'
import LoginPage from '../pageobjects/login.page.js'
import ProductListPage from '../pageobjects/productList.page.js'

const loginPage = new LoginPage()
const productListPage = new ProductListPage()

const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const PRODUCT_LIST = process.env.PRODUCT_LIST

describe('My Login application', async () => {
    it('[APP - CT01] - Should login success with valid credentials', async () => {
        await loginPage.login(USER, PASSWORD)
        await productListPage.accessProductListScreen(PRODUCT_LIST)
    })
})

