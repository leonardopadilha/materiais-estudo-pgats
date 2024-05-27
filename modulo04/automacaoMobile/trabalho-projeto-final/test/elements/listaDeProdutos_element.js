const element = {
    list: {
        productList: 'android=new UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")'
    },
    option: {
        trash: 'android=new UiSelector().packageName("com.example.lojinha").text("delete").instance(0)'
    },
    button: {
        trash: 'android=new UiSelector().text("Celular").fromParent(new UiSelector().text("delete"))',
        addProduct: 'android=new UiSelector().packageName("com.example.lojinha").text("ADICIONAR PRODUTO")'
    }
}

module.exports = element