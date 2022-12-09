document.addEventListener('DOMContentLoaded', function () {
	$header = document.querySelector('.header');
	document.querySelectorAll('.header_openLink, .header_closeLink').forEach($el  => {
		$el.addEventListener('click', function(e){
			$header.classList.toggle('header__isOpen');
		});
	});
});
