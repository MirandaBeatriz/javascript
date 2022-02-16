

/*aritiméticos*/
console.log(`---Operadores aritméticos---`);

var x = 4
var y = 2
console.log(`x =  ${x}`);
console.log(`y =  ${y}`);

a = x + y
s = x - y
m = x * y
d = x / y
di = x % y
e = x ** y

console.log(`Adição: ${a}`);
console.log(`Subtração: ${s}`);
console.log(`Multiplicação: ${m}`);
console.log(`Divisão: ${d}`);
console.log(`ADivisão inteira: ${di}`);
console.log(`Exponenciação: ${e}`);

console.log(`---Operadores de atribuição---`);

/*Atribuição*/

var a = 5;
var b = a; 
console.log(`Variável a = ${a}`);
console.log(`Variável b = ${b}`);

/*Auto-atribuição */

a += 4;
console.log(`a + 4 = ${a}`);

b **= 2;
console.log(`b ** 2 = ${b}`);

a ++;
console.log(`a + 1  = ${a}`);

/*Relacionais */
console.log(`---Operadores relacionais---`);

x = a > b;
console.log('a maior que b: ' + x );
x = a == b;
console.log('a igual a b: ' + x);
x = a != b;
console.log('a diferente de b: ' + x);

/*Lógicos */
console.log(`---Operadores lógicos---`);

idade = 20;
sal = 3000;
sexo = 'm';
console.log(`Idade = ${idade}`);
console.log(`salário = ${sal}`);
console.log(`Sexo = ${sexo}`);

pergunta = idade >= 18 && idade <= 21;
console.log('Idade entre 18 e 21? ' + pergunta);

pergunta = sal > 1500 && sexo == 'f';
console.log('Mulher que ganha mais de R$ 1500,00? ' + pergunta);

/*Ternários */
console.log(`---Operadores ternários---`);

m = 5.5;
console.log(`Média 1 = ${m}`);
console.log(m >= 7? 'APROVADO':'REPROVADO');

m = 8.5;
console.log(`Média 2 = ${m}`);
console.log(m >= 7? 'APROVADO':'REPROVADO');

