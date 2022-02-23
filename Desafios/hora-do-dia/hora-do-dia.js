function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('foto');

    /*Pegando data atual */
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`

    /*Alterando Imagem*/
    if (hora >= 5 && hora < 12){
        img.src = 'Imagens/Manhã-250px.png'
        document.body.style.background = '#3c4d5d'
    } else if (hora >= 12 && hora < 18){
        img.src = 'Imagens/Tarde-250px.png'
        document.body.style.background = '#8b5725'
    } else {
        img.src = 'Imagens/Noite-250px.png'
        document.body.style.background = '#070f19'
    }
}