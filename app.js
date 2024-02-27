function sortear(){
    let quantidade = document.getElementById("quantidade").value;
    let de = document.getElementById("de").value;
    let ate = document.getElementById("ate").value;

    let numeroAleatorio = Math.random()
    let conjuntoNumeros = Math.floor(numeroAleatorio * (ate - de + 1)+ de)

    console.log(conjuntoNumeros)
}

let numeroAleatorio = math.floor(Math.random()*10)
let conjuntoNumeros = numeroAleatorio * (ate - de + 1)+ de

console.log(conjuntoNumeros)

//let novoTexto = `Números sorteados até agora ${conjuntoNumeros}`