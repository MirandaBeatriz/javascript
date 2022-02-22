
function calcular(){
    var txtvel = document.getElementById('txtvel');
    var result = document.getElementById('resultado');
    var vel = Number(txtvel.value);
    result.innerHTML = `<p>Sua velocidade é de <strong>${vel} Km/h </strong></p>`;

    if (vel > 60){
        result.innerHTML += '<p>Você está <strong>MULTADO!</strong></p>';
    }
    result.innerHTML += `<p>Dirija com cuidado!</p>`;
}