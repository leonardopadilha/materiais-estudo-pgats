function verificarSeListaEstaVazia(primeiraLista, segundaLista) {
    if (primeiraLista.length === 0 || segundaLista.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }
}

function retornaListaFormatada(lista) {
    let listaFormatada = lista.trim().split(" ").join(", ");
    return listaFormatada;
}

const calcularTotal = (ferramentas, comprar) => {
    let valor = 0;
    let tecnologias = ''

    verificarSeListaEstaVazia(ferramentas, comprar);

    for (let i = 0; i < ferramentas.length; i++) {
        for (let j = 0; j < comprar.length; j++) {
            if (ferramentas[i].nome === comprar[j]) {
                valor += ferramentas[i].preco;
                tecnologias += comprar[j] + " ";
            }
        }
    }

    let ferramentasAutomacao = retornaListaFormatada(tecnologias);
    
    if (valor > 0) {
        return `O valor a pagar pelas ferramentas (${ferramentasAutomacao}) é R$ ${valor.toFixed(2)}`;
    }
    
    throw new Error ("Nenhuma ferramenta desejada encontrada.");
}

module.exports = {
    calcularTotal
};