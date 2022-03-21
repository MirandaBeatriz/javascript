$(function(){
    /*$('h1').delay('slow');
    $('h1').css("color","#f66");
    $('h1').delay('slow');
    $('h1').hide(1000);
    $('h1').delay('1000');
    $('h1').fadeIn("slow");*/
    
    /* JQUERY encadeado*/
    $('h1')
    .delay('slow')
    .fadeOut("slow")
    .delay('1000')
    .fadeIn("slow")
    .css("color","#f66");
})