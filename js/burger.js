document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav__list');
  const overlay = document.querySelector('.header__overlay');
  const body = document.body;

  if (!burger || !navList || !overlay) return;

  function openMenu() {
    burger.classList.add('burger--open');
    navList.classList.add('nav__list--open');
    overlay.classList.add('header__overlay--active');
    body.classList.add('menu-open');
  }
  function closeMenu() {
    burger.classList.remove('burger--open');
    navList.classList.remove('nav__list--open');
    overlay.classList.remove('header__overlay--active');
    body.classList.remove('menu-open');
  }

  burger.addEventListener('click', function () {
    if (navList.classList.contains('nav__list--open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  // Закрытие меню по клику вне меню (но не по overlay)
  document.addEventListener('click', function (e) {
    if (
      navList.classList.contains('nav__list--open') &&
      !navList.contains(e.target) &&
      !burger.contains(e.target) &&
      !overlay.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Закрытие меню при переходе по ссылке
  navList.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}); 