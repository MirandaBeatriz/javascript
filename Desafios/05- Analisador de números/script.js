let num = document.getElementById('txtn');
let table = document.getElementById('tab');
let res = document.getElementById('res');
let valores = [];

function nrepeat(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function isnumber(n){
    if (Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isnumber(num.value) && !nrepeat(num.value, valores)){
        let n = Number(num.value);
        valores.push(n);
        let linha = document.createElement('tr');
        let item = document.createElement('td');
        var txt = document.createTextNode(`Valor ${n} adicionado`);
        
        item.appendChild(txt);
        linha.appendChild(item);
        table.appendChild(linha);
    }else{
        window.alert('[ERRO] Número inválido ou já na lista!');
    }
}

function quant(v){
    var q = v.length
    return q
}

function soma(v){
    var s =0;
    for (var i = 0; i < v.length; i++){
        s = s + v[i];
    }
    return s;
}

function max(v){
    var nmax = v[0];
    for (var i = 0; i < v.length; i++){
        if (nmax < v[i]){
            nmax = v[i];
        }
    }
    return nmax;
}

function min(v){
    var nmin = v[0]
    for (var i = 0; i < v.length; i++){
        if (nmin > v[i]){
            nmin = v[i];
        }
    }
    return nmin;
}

function media(v){
    m = soma(v)/v.length
    return m
}

function analisar(){
    res.innerHTML = `Lista composta por: ${valores} <br>`
    res.innerHTML += `Ao todo temos ${quant(valores)} números <br>`
    res.innerHTML += `A soma dos números é ${soma(valores)} <br>`
    res.innerHTML += `O maior valor é ${max(valores)} <br>`
    res.innerHTML += `O menor valor é ${min(valores)} <br>`
    res.innerHTML += `A média dos valores é ${media(valores)}`
}