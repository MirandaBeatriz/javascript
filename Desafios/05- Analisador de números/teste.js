valores = [4,6,8]


function quant(){
    var q = valores.length
    return q
}

function soma(){
    var s =0;
    for (var i = 0; i < valores.length; i++){
        s = s + valores[i];
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

console.log(quant(valores))
console.log(soma(valores))
console.log(max(valores))
console.log(min(valores))
console.log(media(valores))