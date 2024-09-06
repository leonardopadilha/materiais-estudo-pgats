const spinWords = require ("../src/spinWords");
const assert = require("node:assert")

describe("spinWords", () => {
    describe("#spinWords", () => {
        it("deve retornar a frase This is a test sem inversão de texto", () => {
            assert.equal(spinWords("This is a test"), "This is a test")
        })

        it("deve retornar a frase This is another test com inversão de texto", () => {
            assert.equal(spinWords("This is another test"), "This is rehtona test")
        })

        it("deve retornar a frase Seriously this is the last one com inversão de texto", () => {
            assert.equal(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one")
        })

        it("deve retornar a frase Just kidding there is still one more com inversão de texto", () => {
            assert.equal(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more")
        })
    })
})