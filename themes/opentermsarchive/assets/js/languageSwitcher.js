document.addEventListener('DOMContentLoaded', () => {
  const $languageSwitcher = document.querySelector('.languageSwitcher');

  document.querySelectorAll('.languageSwitcher_current, .languageSwitcher_item').forEach($el => {
    $el.addEventListener('click', () => {
      $languageSwitcher.classList.toggle('languageSwitcher__isOpen');
    });
  });
});
