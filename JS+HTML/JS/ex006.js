/* Ao clicar na div ocorre a criação de um objeto chamado 'a' que faz uma ligação entre ele e o elemento com id = area*/

/*Esse objeto vai mudar o texto escrito dentro da div*/
function clicar(){
    var a = window.document.getElementById('area');
    a.addEventListener('onclick', clicar);
    a.innerText = 'Clicou!';
    a.style.background = 'blue';
}

/*Muda texto ao entrar com mouse na div */
function entrar(){
    var b = window.document.getElementById('area');
    b.addEventListener('onmouseenter', entrar);
    b.innerText = 'Entrou';
    b.style.background = 'green';
}

/*Muda texto ao retirar mouse da div e o colore de vermelho*/
function sair(){
    var c = window.document.getElementById('area');
    c.addEventListener('onmouseout', sair);
    c.innerText = 'Saiu';
    c.style.background = 'red';
}

