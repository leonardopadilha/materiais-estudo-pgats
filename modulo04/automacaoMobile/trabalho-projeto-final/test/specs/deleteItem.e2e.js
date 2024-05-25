import 'dotenv/config'
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ListaDeProdutosPage from '../pageobjects/listaDeProdutos.page.js'

const loginPage = new LoginPage()
const listaDeProdutosPage = new ListaDeProdutosPage()

const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const PRODUCT_LIST = process.env.PRODUCT_LIST

beforeEach(async () => {
    await loginPage.login(USER, PASSWORD)
    await listaDeProdutosPage.accessProductListScreen(PRODUCT_LIST)
});

describe('Delete item on product list screen', async () => {
    it('[APP - CT02] - Should delete item from product list', async () => {
        await listaDeProdutosPage.clickOnTrashButton()
    })
})

