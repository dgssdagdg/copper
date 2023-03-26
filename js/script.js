var $ScalebleBg = $(".scaleble-bg"),
    wh = $(window).height(),
    i = 100,
    lastScroll = 0;

$ScalebleBg.css('background-size','100%');

$(document).scroll(function() {
    
    if( $(document).scrollTop() > ($ScalebleBg.offset().top - wh) ) {
    
        var CurentScroll = $(this).scrollTop();
        
        if (CurentScroll > lastScroll) {
            i++;
        } else if(i > 100) {
            i--;
        }
        
        lastScroll = CurentScroll;
        
        $ScalebleBg.css('background-size', i + '%');
      
    };
    
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let bodys = document.body;
document.addEventListener('click', function(event) {
    if(event.target.closest('.menu-btn')) {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        bodys.classList.toggle('overflow')
    } else if (event.target.closest('.menu-black') && menu.closest('.active')) {
        menu.classList.remove('active');
        bodys.classList.remove('overflow')
        menuBtn.classList.remove('active');
    }
})

let mus = document.querySelector('.menu');
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();
  
        let href = this.getAttribute('href').substring(1);
  
        const scrollTarget = document.getElementById(href);
  
        const topOffset = document.querySelector('.header-nav').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
  
        if(mus.closest('.active') ){
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            bodys.classList.remove('overflow')
        }
        if(!mus.closest('.active') ){
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}


window.onscroll = function(){
    let arrow = document.querySelector('.navigations-arrow')
    var html = document.documentElement, body = document.body;
    if(html.scrollTop>300||body.scrollTop>300) {
        arrow.classList.add('navigations-arrow-active');
    } else arrow.classList.remove('navigations-arrow-active');
     }