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
    $('.advisor-member-modal').click(function(){
        $(this).children('advisor-modal').addClass('show');
        
    })
});