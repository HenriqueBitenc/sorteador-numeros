//Início da função sortear()

function sortear(){

    //Declaração das variáveis globais

let quantidade = parseInt(document.getElementById("quantidade").value);
let de = parseInt(document.getElementById("de").value);
let ate = parseInt(document.getElementById("ate").value);
let novoTexto = [];

if (de >= ate){

    alert("Valores 'Do número' devem ser menores que os valores 'Até o número'!")
    
    return
} 

if (quantidade > (ate-de)){

    alert("Quantidade de números sorteados excede a quantidade de números possíveis!")

    return

}
    
    //Iteração com base na quantidade informada.
    for (   let i = 0; i < quantidade; i++){

    let resultado = sortearNumeroAleatorio(de, ate);

        while(novoTexto.includes(resultado)){

            resultado = sortearNumeroAleatorio(de, ate);   
        }


    
    novoTexto.push(resultado);

    }

    // Exibe o resultado após o fim da iteração

    let sorteados = document.getElementById("resultado");
        sorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${novoTexto}</label>`

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

    let resetados = document.getElementById("resultado");
        resetados.innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum número sorteado!</label>`;

}