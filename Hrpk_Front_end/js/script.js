$(document).ready(function(){
	// SHOW SIDEBAR
	$('.trigger-menu').on('click',function(){
		$('.sidebar-navigation').toggleClass('offset-sidebar-active');
		$('.page').toggleClass(function(){
			$('.page').append('<div class="overlay"></div>');
			return 'offset-sidebar-active';
		});
	})
	$(document).on('click','.overlay',function(){
		$('.sidebar-navigation').toggleClass('offset-sidebar-active',false);
		$('.page').toggleClass('offset-sidebar-active',false);
		$(this).remove();
	})

	// SHOW HIDDEN SCREEN
	$('.trigger-hidden-page').on('click',function(){
		var target = $(this).data('target');
		$(target).fadeIn();
	})
	$('.btn-close').on('click',function(){
		$(this).parent().fadeOut();
	});
})
