var op = window.prompt('Escolha um valor: ')
if (op == 1) {
    /* Método por Tag */
    var p1 = document.getElementsByTagName('p')[1];
    window.document.write(p1.innerText);
    /*Inner text é o terto dentro da tag */
}if (op == 2){
    /*Método por classe */
    var principal = window.document.getElementById('princ');
    window.document.write(princ.innerText);
}if (op == 3){
    /*Por seletor CSS */
    var msg = document.querySelector('h1.msg');
    msg.style.color = 'blue';
}




