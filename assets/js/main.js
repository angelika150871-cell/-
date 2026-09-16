(function () {
  var burger = document.querySelector('.icon-btn--burger');
  var menu = document.getElementById('mobile-menu');

  if (!burger || !menu) return;

  function openMenu() {
    menu.hidden = false;
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', openMenu);

  menu.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', closeMenu);
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden) closeMenu();
  });
})();
