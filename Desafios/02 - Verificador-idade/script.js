function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (nano.value.length <= 0 || nano.value > ano){
        window.alert('[ERRO] Verifique os dados!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade < 11){
                img.setAttribute('src', 'Imagens/menino.png')
            }else if (idade < 21){
                img.setAttribute('src', 'Imagens/jovem-homem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'Imagens/homem-adulto.png')
            }else {
                img.setAttribute('src', 'Imagens/idoso.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 11){
                img.setAttribute('src', 'Imagens/menina.png')
            }else if (idade < 21){
                img.setAttribute('src', 'Imagens/jovem-mulher.png')
            }else if (idade < 50){
                img.setAttribute('src', 'Imagens/mulher-adulta.png')
            }else {
                img.setAttribute('src', 'Imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}