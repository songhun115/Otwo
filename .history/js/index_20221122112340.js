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
   
   
    
    
});