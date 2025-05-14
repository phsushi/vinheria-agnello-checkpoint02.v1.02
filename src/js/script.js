// função que verifica possivel input invalido
function validado_dados(dados){
    if(dados == "" || dados == null){
        alert("Tipo de dado inválido. Por favor, insira o que está sendo pedido!")
        return false;
    }else{
        return true;
    }
}

//função que verifica estoque baixo
function verifica_estoque(estoque){
    let status = "";
    if(estoque < 5){
        mensagem_console("Estoque Baixo!")
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

//laço do cadastro
while (add.toLowerCase() !== "não" && add.toLowerCase() !== "n") {
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
  
    add = prompt("Deseja cadastrar outro vinho? (sim/não)");
}

