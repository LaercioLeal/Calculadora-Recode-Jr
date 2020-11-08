var visor = '';
var operador = '';
var erro = '';

function exibe(value){

    document.getElementById('numbersResult').innerHTML = value;
    document.getElementById('erro').innerHTML = '';

}

function limpar(){

    visor = '';
    operador = '';
    erro = '';
    exibe(0);

}

function addNum(num){

    visor = document.getElementById('numbersResult').innerHTML;

    if(visor == 0){
        exibe(num.innerHTML);
    }
    else{
        exibe(visor + num.innerHTML);
    }

}

function addSinal(sinal){

    visor = document.getElementById('numbersResult').innerHTML;

    if(operador == ''){
        operador = sinal.innerHTML;
        exibe(visor + operador);
    }
    else{
        erro = document.getElementById('erro');
        erro.style.color = "red";
        erro.innerHTML = "Operador já selecionado.";
    }

}

function calcular(){

    visor = document.getElementById('numbersResult').innerHTML;
    let resultado = visor.split(operador);

    if(operador == '+'){

        visor = parseFloat(resultado[0]) + parseFloat(resultado[1]);
        operador = '';

    }
    else if(operador == '-'){

        visor = parseFloat(resultado[0]) - parseFloat(resultado[1]);
        operador = '';
        console.log("resultado: " + resultado);
        console.log("mensagem: " + mensagem);

    }
    else if(operador == '*'){

        visor = parseFloat(resultado[0]) * parseFloat(resultado[1]);
        operador = '';

    }
    else if(operador == '/'){

        visor = parseFloat(resultado[0]) / parseFloat(resultado[1]);
        operador = '';

    }
    else{
        erro = document.getElementById('erro');
        erro.style.color = "red";
        erro.innerHTML = "Operador inválido. Tente novamente.";
    }

    exibe(visor);

}