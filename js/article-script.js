$(document).ready(function() {

  //появляется иконка содержания
  const originalBlock = document.querySelector('.article .article__active__item--original');
  const menuBlock = document.querySelector('.article__active__item-menu');

  function checkVisibility() {
    if (!originalBlock || !menuBlock) return;

    // Проверяем ширину экрана
    if (window.innerWidth <= 767) {
      menuBlock.style.opacity = '0';
      menuBlock.style.maxHeight = '0';
      return; // Выходим, если экран меньше 768px
    }

    const rect = originalBlock.getBoundingClientRect();
    const isOutOfView = rect.bottom < 0; // Когда блок уехал вверх

    if (isOutOfView) {
      menuBlock.style.opacity = '1';
      menuBlock.style.maxHeight = '100px';
    } else {
      menuBlock.style.opacity = '0';
      menuBlock.style.maxHeight = '0';
    }
  }

  // Запускаем при скролле и изменении размера окна
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility(); // Проверяем сразу при загрузке

  //появляется содержание при клике на иконку

   $('.article__active-show-contents').on('click', function() {
    // $('.article__contents-menu').removeClass('article__contents_hide');
    $('.article__contents-menu').addClass('article__contents_active');
  });
  
  $('.article-close-contents, .article__contents__item').on('click', function() {
    $('.article__contents').removeClass('article__contents_active');
  });

});