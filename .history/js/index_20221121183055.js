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
        $('body').addClass('over');
        $(this).children('.advisor-modal').addClass('show');
        $('.modal-bg').addClass('show')
        
    })
    $('.advisor-modal').click(function(){
        $('.advisor-modal').removeClass('show');
        $(this).removeClass('show');
        $('body').removeClass('over');
    })
    

    $('.modal-bg').click(function(){
        $('.advisor-modal').removeClass('show');
        $('.modal-bg').removeClass('show')
        $('body').removeClass('over');
        
    })
   
    
});