$(function(){

    $('button.style1')
    .click(function(){
        $('body').css({background:'black'})
        $('.conteiner').css({background:'#fff',color:'#000'})
        $('button').css({background:'#000',border:'1px solid #fff',color:'#fff'})
    })

    $('button.style2')
    .click(function(){
        $('body').css({background:'#fff'})
        $('.conteiner').css({background:'#000', color:'#fff'})
        $('button').css({background:'#fff',border:'1px solid #000',color:'#000'})
    })

})