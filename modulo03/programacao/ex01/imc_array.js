const tabelaImc = [
    {valorMinimo: 0, valorMaximo: 18.49, classificacao: "Baixo peso"},
    {valorMinimo: 18.5, valorMaximo: 24.99, classificacao: "Normal"},
    {valorMinimo: 25, valorMaximo: 29.99, classificacao: "Sobrepeso"},
    {valorMinimo: 30, valorMaximo: 1000, classificacao: "Obesidade"}
]

const pessoa = 
    {
        idade: null,
        peso: null,
        altura: null,
        classificacao: null,
        imc: null
    }

const prompt = require("prompt-sync")();
pessoa.idade = prompt("Digite a sua idade: ");

if(pessoa.idade >= 20 && pessoa.idade <=60) {
    pessoa.peso = prompt("Digite o seu peso (kg): ");
    pessoa.altura = prompt("Digite a sua altura (X.XX): ");
    pessoa.imc = pessoa.peso / (pessoa.altura*pessoa.altura);
    
    //percorre "tabelaImc" e verifica qual o intervalo a pessoa esta inserida, então classifica e armazena no objeto "pessoa"
    for (let indice in tabelaImc){
        if(pessoa.imc >= tabelaImc[indice].valorMinimo && pessoa.imc <=tabelaImc[indice].valorMaximo)
            pessoa.classificacao = tabelaImc[indice].classificacao;
        else   
            pessoa.classificacao = "Erro"
    }

    if (pessoa.classificacao=="Erro")
        console.log(`Ocorreu uma falha no cálculo do IMC`);
    else
        console.log(`O valor do seu IMC é ${pessoa.imc.toFixed(2)} e foi classificado como ${pessoa.classificacao}`);
}