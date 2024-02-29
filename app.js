function sortear(){


    let quantidade = document.getElementById("quantidade").value;
    let de = document.getElementById("de").value;
    let ate = document.getElementById("ate").value;
    let novoTexto = []

    for (   let i = 0; i < quantidade; i++){

    let resultado = sortearNumeroAleatorio(de, ate)

    
    novoTexto.push(resultado)

    }

    document.getElementById("resultado").textContent = `Números sorteados: ${novoTexto}`
}

function sortearNumeroAleatorio(de, ate){

    let numeroAleatorio = Math.random()
    let conjuntoNumeros = Math.floor(numeroAleatorio * (ate - de + 1))+ parseInt(de)

    return conjuntoNumeros
}