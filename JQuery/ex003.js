$(function(){

    $('button.azul')
    .click(function(){
        $('body').css("background","blue")
        $('h1').css("color","blue")
    })
    $('button.vermelho')
    .click(function(){
        $('body').css("background","red")
        $('h1').css("color","red")
    })
})