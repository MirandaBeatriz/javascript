/*---WHILE--- */
console.log('{WHILE}')
var cont = 8;
while (cont > 0){
    cont--;
    console.log(`Sobrou ${cont} pedaços.`);
}

/*DO-WHILE*/
console.log('{DO-WHILE}')
var cont = 8;
do{
    console.log('Pegar pedaço');
    cont--;
}while(cont > 0);
console.log('Pizza acabou :(')

/*---FOR--- */
console.log('{FOR}')
for(cont = 8; cont > 0; cont--){
    console.log(`Sobrou ${cont} pedaços.`);
}

/*---FOR...IN--- */
console.log('{FOR...IN}')
var carro = {
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
    }
    
    for (propriedade in carro) {
        console.log(`${propriedade}: ${carro[propriedade]}`);
    }
    

/*---FOR...OF--- */
console.log('{FOR...OF}')
let carros = ['fusca', 'civic', 'parati', 'montana'];

for(let carro of carros){
    console.log(carro)
}