/*
	Bloqueo menu navegacion	
*/

var num = 2000; //number of pixels before modifying styles
$(window).bind('scroll', function () {
	if ($(window).scrollTop() > num) {
    	$('.menu').addClass('fixed');
	} else {
    	$('.menu').removeClass('fixed');
	}
});

/*
	Desplazamiento suave scroll	
*/

$(function(){
    //clic en un enlace del menu
    $('nav ul li a').on('click',function(e){
        //prevenir el comportamiento predeterminado del enlace
        e.preventDefault();
        //obtenemos el enlace del elemento en el que debemos posicionarnos
        var strAncla=$(this).attr('href');
         
        //utilizamos body y html, ya que dependiendo del navegador uno u otro no funciona
        $('body,html').stop(true,true).animate({
            //realizamos la animacion hacia el ancla
            scrollTop: $(strAncla).offset().top
        },1000);
    });
});

$('nav ul li').on('click',function() {
	$("li").removeClass('activa');
	$(this).addClass('activa');
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 800){
        $('div a').fadeIn();
    } else{
        $('div a').fadeOut();
    }
 });
