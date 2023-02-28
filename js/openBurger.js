window.addEventListener("DOMContentLoaded", function() {
  // Открытие и закрытие меню бургура
  const burger = document.querySelector('#burger');


  burger.addEventListener('click', function(e) {
    e.currentTarget.classList.toggle('open');
    document.querySelector('#header-nav').classList.toggle('open');
  })
})
