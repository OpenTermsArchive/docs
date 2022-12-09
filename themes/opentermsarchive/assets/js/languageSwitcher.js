document.addEventListener('DOMContentLoaded', function () {
	$languageSwitcher = document.querySelector('.languageSwitcher');
	document.querySelectorAll('.languageSwitcher_current, .languageSwitcher_item').forEach($el  => {
		$el.addEventListener('click', function(e){
			$languageSwitcher.classList.toggle('languageSwitcher__isOpen');
		});
	});
});
