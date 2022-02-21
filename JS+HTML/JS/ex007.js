function somar(){
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.querySelector('input#txtn2');
    var result = document.getElementById('resultado');
    /*Convertendo para number*/
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 + n2;
    result.innerText = s;
}