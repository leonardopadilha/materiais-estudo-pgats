const { calcularTotal } = require("./src/compras/compras");

const ferramentas = [
    { nome: "UFT", preco: 100, fabricante: "OpenText" },
    { nome: "TestComplete", preco: 200, fabricante: "Smartbear" },
    { nome: "TOSCA", preco: 300, fabricante: "Tricents" }
];

const comprar = ["Selenium,", "TOSCA"];

try {
    console.log(calcularTotal(ferramentas, comprar));
} catch (error) {
    console.log(error)
}


