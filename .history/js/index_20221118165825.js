$(document).ready(function () {
    $('.more-button').click(function () {
        $('.advisor-member-item-more').addClass('show');
    });
    $('.trigger').click(function(){
        $('.trigger').toggleClass('on');
        $('.mb-nav-box').addClass('show')
    })
});