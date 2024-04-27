function calculaIMC(altura, peso) {

    if ((!typeof altura === "number" || !typeof peso === "number") || (altura <= 0 || peso <= 0)){
        return 'Dados inválidos para essa consulta'
    }

    let imc = peso / (altura * altura)
    let imcFormatado = imc.toFixed(2)
    

    if (imc < 18.5) {
        return `IMC: ${imcFormatado} - Baixo peso`
    } else if (imc < 24.99) {
        return  `IMC: ${imcFormatado} - Peso Normal`
    } else if (imc <= 29.99 ) {
        return `IMC: ${imcFormatado} - Sobrepeso`
    } else {
        return `IMC: ${imcFormatado} - Obesidade`
    } 
}

module.exports = calculaIMC