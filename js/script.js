var $ScalebleBg = $(".scaleble-bg"),
    wh = $(window).height(),
    i = 120,
    lastScroll = 0;

$ScalebleBg.css('background-size','120%');

$(document).scroll(function() {
    
    if( $(document).scrollTop() > ($ScalebleBg.offset().top - wh) ) {
    
        var CurentScroll = $(this).scrollTop();
        
        if (CurentScroll > lastScroll) {
            i++;
        } else if(i > 120) {
            i--;
        }
        
        lastScroll = CurentScroll;
        
        $ScalebleBg.css('background-size', i + '%');
      
    };
    
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

document.addEventListener('click', function(event) {
    if(event.target.closest('.menu-btn')) {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    } else if (event.target.closest('.menu-black') && menu.closest('.active')) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
})