var num = [1,13,7,15,2,8,4,20]

console.log(`Usando FOR`);
for (var i = 0; i < num.length; i++){
    console.log(`Posição ${i}: ${num[i]}`);
}

/* FOR...IN */
console.log(`Usando FOR...IN`);
for(var p in num){
    console.log(`Posição ${p}: ${num[p]}`);
}

/*---Procurar valor expecífico---*/
var a = num.indexOf(19) 
if (a == -1){
    console.log(`[ERRO] O valor não está no vetor!`);
}else{
    console.log(`O valor procurado está na posição: ${a}`);
}
