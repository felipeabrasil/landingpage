
/*
    Created on : 19/05/2019
    Author     : Felipe Brasil

    Description:
*/

/* ano atualizado*/
function timeClock() {
    setTimeout(timeClock, 1000);
    now = new Date();
    //console.log(now);
    //f_date = now.getDate();
    //f_date +=" "+now.getMonth();
    f_date = now.getFullYear();
    //f_date +=" / "+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
    $('.year').html(f_date);
    return f_date;
}
$(function(){
    $('.year').html(timeClock());
});


//click em # animation offset
$('.offset[href^="#"]').on('click',function (eagora) {
     eagora.preventDefault();

     var target = this.hash;
     var $target = $(target);

     $('html, body').stop().animate({
         'scrollTop': $target.offset().top
     }, 900, 'swing', function () {
         window.location.hash = target;
     });
 });

 // Esconder lnk voltar topo
$(".lnktopo").hide();

// fade in lnk voltar topo

$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
                $('.lnktopo').fadeIn();
        } else {
                $('.lnktopo').fadeOut();
        }
});
