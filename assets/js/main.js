(function () {
  var burger = document.querySelector('.icon-btn--burger');
  var nav = document.getElementById('primary-nav');

  if (!burger || !nav) return;

  burger.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('.menu-link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function (event) {
    if (!nav.classList.contains('is-open')) return;
    if (nav.contains(event.target) || burger.contains(event.target)) return;
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });
})();
