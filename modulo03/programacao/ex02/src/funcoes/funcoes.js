const calculaMedia = (primeiroNumero, segundoNumero) => {
    return (primeiroNumero + segundoNumero) / 2
};

const mensagemBoasVindas = () => console.log("Seja Bem vindo(a)!");

//codeium --> ajuda no desenvolviemento
// codiumate --> ajuda a criar testes
const listarItems = (vetor) => {
    for (let indice of vetor) {
        console.log(`${indice} é um item`);
    }
}

const pesquisarPalavraNoVetor = (vetor, palavra) => {
    for (let indice of vetor) {
        if (palavra === indice) {
            return `${palavra} foi encontrado!!!`
        }
    }
    return `${palavra} não foi encontrado!!!`
}

/* const listarItems = (vetor) => {
    for (let i in vetor) {
        console.log(`${vetor[i]} é um item`);
    }
} */

module.exports = {
    calculaMedia,
    welcome: mensagemBoasVindas,
    listarItems,
    pesquisarPalavraNoVetor
}