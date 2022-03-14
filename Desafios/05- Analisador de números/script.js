let num = document.getElementById('txtn');
let table = document.getElementById('tab');
let res = document.getElementById('div#res');
let valores = [];

function adicionar(){

    if (num.value.length == 0 || num.value > 100 || num.value < 1){
        window.alert('[ERRO] Favor inserir um número');
    }else{
        let n = Number(num.value);
        let linha = document.createElement('tr');
        let item = document.createElement('td');
        var txt = document.createTextNode(`Valor ${n} adicionado`);

        item.appendChild(txt);
        linha.appendChild(item);
        table.appendChild(linha);
    }
}

function analisar(){
    res.innerHTML = valores
}