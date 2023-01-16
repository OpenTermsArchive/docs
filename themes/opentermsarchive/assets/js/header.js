document.addEventListener('DOMContentLoaded', () => {
  const $header = document.querySelector('.header');

  document.querySelectorAll('.header_openLink, .header_closeLink').forEach($el => {
    $el.addEventListener('click', () => {
      $header.classList.toggle('header__isOpen');
    });
  });
});
