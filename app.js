//Início da função sortear()

function sortear(){

    //Declaração das variáveis globais

let quantidade = document.getElementById("quantidade").value;
let de = document.getElementById("de").value;
let ate = document.getElementById("ate").value;
let novoTexto = [];
    
    //Iteração com base na quantidade informada.
    for (   let i = 0; i < quantidade; i++){

    let resultado = sortearNumeroAleatorio(de, ate);

    
    novoTexto.push(resultado);

    }

    // Exibe o resultado após o fim da iteração
    document.getElementById("resultado").textContent = `Números sorteados: ${novoTexto}`;
    // Reseta os campos para nova Atividade
    document.getElementById("btn-reiniciar").classList.remove("container__botao-desabilitado")
    document.getElementById("btn-reiniciar").classList.add("container__botao")


}

// Função para gerar o número aleatório
function sortearNumeroAleatorio(de, ate){

    let numeroAleatorio = Math.random();
    let conjuntoNumeros = Math.floor(numeroAleatorio * (ate - de + 1))+ parseInt(de);

    return conjuntoNumeros
}

function reiniciar(){

    document.getElementById("quantidade").value = ""
    document.getElementById("de").value = ""
    document.getElementById("ate").value = ""
    document.getElementById("btn-reiniciar").classList.remove("container__botao")
    document.getElementById("btn-reiniciar").classList.add("container__botao-desabilitado")

    document.getElementById("resultado").textContent = `Números sorteados: Nenhum número sorteado!`;

}