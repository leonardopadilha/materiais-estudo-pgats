const element = {
    input: {
        user: 'android=new UiSelector().packageName("com.example.lojinha").className("android.widget.EditText").instance(0)',
        password: 'android=new UiSelector().resourceId("senha")',
    },
    button: {
        submit: 'android=new UiSelector().text("ENTRAR")'
    }
}

module.exports = element