function LoadingPage() {
	var preloader = $( '.preloader' );
	var preloader_block = preloader.find( '.preloader-block' );
	var progress_number = preloader_block.find( '.percent' );
	var progress_title = preloader_block.find( '.title' );
	var progress_loading = preloader_block.find( '.loading' );
	
	var preloader_bar = preloader.find( '.preloader-bar' );
	var preloader_progress = preloader_bar.find( '.preloader-progress' );
	
	var preloader_after = preloader.find( '.preloader-after' );
	var preloader_before = preloader.find( '.preloader-before' );
	
	
	var timer = dsnGrid.pageLoad( 0 , 100 , 300 , function ( val ) {
		progress_number.text( val );
		preloader_progress.css( 'width' , val + '%' )
		
	} );
	
	
	$( window ).on( 'load' , function () {
		
		
		clearInterval( timer );
		TweenMax.to( preloader_progress , .5 , {
			width : '100%' ,
			onUpdate : function ( $p ) {
				var f = preloader_progress.width() / preloader_progress.parent().width() * 100;
				progress_number.text( parseInt( f ) );
			} ,
			onComplete : function () {
				TweenMax.to( preloader_bar , .5 , { left : '100%' } );
				TweenMax.to( progress_title , 1 , { autoAlpha : 0 , y : -100 } );
				TweenMax.to( progress_loading , 1 , { autoAlpha : 0 , y : 100 } );
				TweenMax.to( progress_number , 1 , { autoAlpha : 0 } );
				
				TweenMax.to( preloader_before , 1 , { y : '-100%' , delay : .7 } );
				TweenMax.to( preloader_after , 1 , {
					y : '100%' , delay : .7 , onComplete : function () {
						finshedLoad();
					}
				} );
			}
		} );
	} );
	
	function finshedLoad() {
		preloader.addClass( 'hidden' );
		FilteringISO();
		effectScroller().start();
		swiperProj();
		effectScroller().isSlider();
		
		
	}
}