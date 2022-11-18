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
});