function tabuada(){
    let num = document.getElementById('txtn');
    let table = document.getElementById('tab');
    let t = document.getElementById('titulo');

    if (num.value.length == 0){
        window.alert('[ERRO] Favor inserir um número');
    } else {
        let n = Number(num.value);
        t.innerHTML = `Tabuada do número ${n}`;
        tab.innerHTML = ''

        for (let c = 1; c <= 10; c++){
            let linha = document.createElement('tr');
            let item1 = document.createElement('td');
            let item2 = document.createElement('td');
            var txt1 = document.createTextNode(`${n} x ${c}`);
            var txt2 = document.createTextNode(`${n*c}`);

            item1.appendChild(txt1);
            item2.appendChild(txt2);
            linha.appendChild(item1);
            linha.appendChild(item2);
            table.appendChild(linha);
        }
    }
}