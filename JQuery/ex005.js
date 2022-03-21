$(function(){
    $('button').click(function(){
        $('h2').css({color:'blue'})
        $('div p').css({'font-family':'Arial, sans-serif'})
        $('div h2')
        .css({'font-weigth':'bolder','text-decoration': 'underline'})
        .fadeOut().delay('1000').fadeIn(1000).css({'font-weigth':'bolder','text-decoration': 'underline',color:'green'})
        $('p span').css({color:'purple'})
        $('.p1').css({color:'red','font-size':'20px'})
    })
})