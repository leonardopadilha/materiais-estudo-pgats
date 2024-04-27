const { calculaMedia, welcome, listarItems, pesquisarPalavraNoVetor } = require('./funcoes/funcoes');

console.log(calculaMedia(21, 30));
welcome();

const tecnologias = [ "Cypress", "Selenium", "Playwright" ];
listarItems(tecnologias);

//console.log(pesquisarPalavraNoVetor([ "Cypress", "Selenium", "Playwright" ], "Cypress"));
console.log(pesquisarPalavraNoVetor(tecnologias, "Cypress"));

