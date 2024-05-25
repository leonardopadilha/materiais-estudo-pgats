const elements = {
    title: {
        addProduct: '//*[@text="Adicionar produto "]',
        editProduct: '//*[@text="Editar produto "]'
    },
    input: {
        productName: 'android=new UiSelector().resourceId("produtonome")',
        productValue: 'android=new UiSelector().resourceId("produtovalor")',
        productColors: 'android=new UiSelector().resourceId("produtocores")',
        componentName: 'android=new UiSelector().resourceId("componentenomeadicionar")',
        componentQuantity: 'android=new UiSelector().resourceId("componentequantidadeadicionar")'
    },
    button: {
        saveProduct: 'android=new UiSelector().className("android.widget.Button").text("SALVAR")',
        addComponent: '//*[@text="ADICIONAR COMPONENTE"]',
        saveComponent: 'android=new UiSelector().text("SALVAR COMPONENTE")',
        saveComponentScroll: 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("SALVAR COMPONENTE"))'
    },
    field: {
        showComponentName: 'android=new UiSelector().textContains("Lojinha Televisão")' 
    }
}

module.exports = elements