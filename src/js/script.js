// função que verifica possivel input invalido
function validado_dados(dados){
    if(dados == "" || dados == null){
        alert("Tipo de dado inválido. Por favor, insira o que está sendo pedido!")
        return false;
    }else{
        return true;
    }
}
let classificadosComoBaixo = 0;
//função que verifica estoque baixo
function verifica_estoque(estoque){
    let status = "";
    if(estoque < 5){
        classificadosComoBaixo++
        status = "Baixo"
    }
    else{
        status = "controlado"
    }
    return status;
}

//função que classifica idade do vinho
function classifica_vinho(safra){
    let classificacao = "";
    if(safra >=2020){
        classificacao = "Jovem"
    }else if(safra >= 2015 && safra <= 2019){
        classificacao = "Amadurecido"
    }
    else{
        classificacao = "Antigo"
    }

    return classificacao
}

//funçaõ que notifica msg no console
function mensagem_console(mensagem){
alert("Você tem uma nova mensagem no console. Acesse-o para visualizar.")
console.log(mensagem)
}

//declarando variaveis
let add = "sim";
cadastro = 0
let vinhoSafraAntiga = "";
let safraAntiga = 0;
//cadastro de vinhos no terminal
while(true) {
    let Nome = prompt("Qual o nome do vinho que você deseja cadastrar?");
    while (!validado_dados(Nome)) {
        Nome = prompt("Qual o nome do vinho que você deseja cadastrar?");
    }

    let safra = prompt("Qual é a safra do vinho: " + Nome);
    while (!validado_dados(safra)) {
        safra = prompt("Qual é a safra do vinho: " + Nome);
    }
    classifica_vinho(safra);

    let estoque = prompt("Qual é o estoque do vinho: " + Nome);
    while (!validado_dados(estoque)) {
        estoque = prompt("Qual é o estoque do vinho: " + Nome);
    }

    mensagem_console(`O vinho: ${Nome} da safra de: ${safra} com estoque de: ${estoque} unidades. Foi cadastrado. Classificado como: ${classifica_vinho(safra)}, de estoque: ${verifica_estoque(estoque)} `)
    cadastro ++

    add = prompt("Deseja cadastrar outro vinho? (sim/não)");

    while(add != "sim" && add != "não"){
        alert("Use os comandos sim/não para prosseguir.")
        add = prompt("Deseja cadastrar outro vinho? (sim/não)");
    }

    //Descobrindo o vinho com a safra mais antiga
    if(vinhoSafraAntiga == ""){
        vinhoSafraAntiga = Nome
        safraAntiga = safra
    }else{
        if(safra < safraAntiga){
            vinhoSafraAntiga = Nome
            safraAntiga = safra;
        }
    }

    if(add == "não"){
        break
    }
    while(add.toLowerCase() != "sim" && add.toLowerCase() != "não" && add.toLowerCase() != "n" && add.toLowerCase() != "s") {
        add = ""
        validado_dados(add)
        add = prompt("Deseja cadastrar outro vinho? (sim/não)");
    }
}


mensagem_console(`${cadastro} cadastro(s) foram realizados.\nO vinho com a safra mais antiga é: ${vinhoSafraAntiga}\n${classificadosComoBaixo} vinhos tiveram o estoque classificado como Baixo`)

