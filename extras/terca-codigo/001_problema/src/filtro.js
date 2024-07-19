/*
Neste Kata você criará uma função que pega uma lista de inteiros e strings e retorna
uma nova lista sem as strings.
Fonte: codewars.com
*/

function retornaListaSemString(lista) {
    if (!lista.length) {
        throw new Error("A lista não pode estar vazia")
    } 

    const novaLista = []
    for (let i in lista) {
        if (typeof lista[i] !== 'string') {
            novaLista.push(lista[i])
        }
    }
    return novaLista
}

module.exports = retornaListaSemString

