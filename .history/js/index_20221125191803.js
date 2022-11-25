$(document).ready(function () {
    
    $('.more-button').click(function () {
        $('.advisor-member-item-more').addClass('show');
    });

    $('.trigger').click(function(){
        $('.trigger').toggleClass('on');
        $('.mb-nav-box').addClass('show')
        $('.menu-bg').addClass('show')
    })

    $('.menu-close').click(function(){    
        $('.mb-nav-box').removeClass('show')
        $('.menu-bg').removeClass('show')
    })

    $('.modal-bg').click(function(){
        $('.advisor-modal').removeClass('show');
        $('.modal-bg').removeClass('show')
        $('body').removeClass('over');
    })
    
    $('.modal-close').click(function(){
        $('.advisor-modal').removeClass('show');
        $('.modal-bg').removeClass('show')
        $('body').removeClass('over');
    })
    
    
    $('.advisor-member-modal01').click(function(){
        $('body').addClass('over');
        $('.advisor-modal01').addClass('show');
        $('.modal-bg').addClass('show')
    })
    $('.advisor-member-modal02').click(function(){
        $('body').addClass('over');
        $('.advisor-modal02').addClass('show');
        $('.modal-bg').addClass('show')
    })
    $('.advisor-member-modal03').click(function(){
        $('body').addClass('over');
        $('.advisor-modal03').addClass('show');
        $('.modal-bg').addClass('show')
    })
   
    $('.advisor-member-modal04').click(function(){
        $('body').addClass('over');
        $('.advisor-modal04').addClass('show');
        $('.modal-bg').addClass('show')
    })
   
    $('.advisor-member-modal05').click(function(){
        $('body').addClass('over');
        $('.advisor-modal05').addClass('show');
        $('.modal-bg').addClass('show')
    })
   
    $('.advisor-member-modal06').click(function(){
        $('body').addClass('over');
        $('.advisor-modal06').addClass('show');
        $('.modal-bg').addClass('show')
    })
   
    $('.advisor-member-modal07').click(function(){
        $('body').addClass('over');
        $('.advisor-modal07').addClass('show');
        $('.modal-bg').addClass('show')
    })
   
    $('.advisor-member-modal08').click(function(){
        $('body').addClass('over');
        $('.advisor-modal08').addClass('show');
        $('.modal-bg').addClass('show')
    })
   
    $('.advisor-member-modal09').click(function(){
        $('body').addClass('over');
        $('.advisor-modal09').addClass('show');
        $('.modal-bg').addClass('show')
    })
   
    $('.advisor-member-modal10').click(function(){
        $('body').addClass('over');
        $('.advisor-modal10').addClass('show');
        $('.modal-bg').addClass('show')
    })
    $('.advisor-member-modal11').click(function(){
        $('body').addClass('over');
        $('.advisor-modal11').addClass('show');
        $('.modal-bg').addClass('show')
    })
    $('.advisor-member-modal12').click(function(){
        $('body').addClass('over');
        $('.advisor-modal12').addClass('show');
        $('.modal-bg').addClass('show')
    })
    $('.advisor-member-modal13').click(function(){
        $('body').addClass('over');
        $('.advisor-modal13').addClass('show');
        $('.modal-bg').addClass('show')
    })
   
    $(".scroll-down").click(function(){
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
    });
    $(".scroll-up").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
    $('.road-modal01 ').click(function(){
        alert('hi')
        $('body').addClass('over');
        $('.advisor-modal09').addClass('show');
        $('.modal-bg').addClass('show')
    })
   
    
    
});