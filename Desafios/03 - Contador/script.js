function contar(){
    var inicio = document.getElementById('txtinicio');
    var fim = document.getElementById('txtfim');
    var passo = document.getElementById('txtpasso');
    var res = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '[ERRO] Verifique os dados!'
    } 
    else{
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if (i < f){
            for(var cont = i; cont <= f; cont +=p){
                res.innerHTML += `${cont} \u{1F449}`;
            }
        }else {
            for(var cont = i; cont >= f; cont -=p){
                res.innerHTML += `${cont} \u{1F449}`;
            }
        }
        res.innerHTML += "\u{1F3C1}";
    }
}