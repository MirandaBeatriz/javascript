var nascimento = 1985;

var agora = new Date();
var ano_atual = agora.getFullYear();

var idade = ano_atual - nascimento;
console.log(`Você tem ${idade} anos de idade.`);

if(idade < 16){
    console.log('Não Vota');
}else{
    if(idade < 18 || idade > 65){
        console.log('Voto Opcional');
    }else{
        console.log('Voto Obrigatório');
    }
}