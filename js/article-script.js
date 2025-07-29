$(document).ready(function() {

  // //появляется иконка содержания
  // const originalBlock = document.querySelector('.article .article__active__item--original');
  // const menuBlock = document.querySelector('.article__active__item-menu');

  // function checkVisibility() {
  //   if (!originalBlock || !menuBlock) return;

  //   // Проверяем ширину экрана
  //   if (window.innerWidth <= 767) {
  //     menuBlock.style.opacity = '0';
  //     menuBlock.style.maxHeight = '0';
  //     return; // Выходим, если экран меньше 768px
  //   }

  //   const rect = originalBlock.getBoundingClientRect();
  //   const isOutOfView = rect.bottom < 0; // Когда блок уехал вверх

  //   if (isOutOfView) {
  //     menuBlock.style.opacity = '1';
  //     menuBlock.style.maxHeight = '100px';
  //   } else {
  //     menuBlock.style.opacity = '0';
  //     menuBlock.style.maxHeight = '0';
  //   }
  // }

  // // Запускаем при скролле и изменении размера окна
  // window.addEventListener('scroll', checkVisibility);
  // window.addEventListener('resize', checkVisibility);
  // checkVisibility(); // Проверяем сразу при загрузке

  //появляется содержание при клике на иконку
  if (window.innerWidth <= 767) {

   $('.article__active-show-contents').on('click', function() {
    // $('.article__contents-menu').removeClass('article__contents_hide');
    $('.article__contents-menu').addClass('article__contents_active');
    $('body').addClass('body-fixed');
  });
  
  $('.article-close-contents, .article__contents__item').on('click', function() {
    
    $('.article__contents').removeClass('article__contents_active');
    $('body').removeClass('body-fixed');
  });
}
$('a[href="#article-menu"]').on('click', function(e) {
    if ($(window).width() < 767) {
      e.preventDefault(); // Отменяем скролл
      e.stopPropagation(); // Останавливаем всплытие события
      
    }
    
  });

  //механика оценки (рейтинг)

 const stars = document.querySelectorAll('.star');
  
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const value = parseInt(this.getAttribute('data-value'));
      
      // Обновляем звёзды
      stars.forEach((s, index) => {
        s.classList.toggle('active', index < value);
      });
    });
    
    // Опционально: эффект при наведении
    star.addEventListener('mouseover', function() {
      const value = parseInt(this.getAttribute('data-value'));
      stars.forEach((s, index) => {
        s.classList.toggle('hover', index < value);
      });
    });
    
    star.addEventListener('mouseout', function() {
      stars.forEach(s => s.classList.remove('hover'));
    });
  });

  //фиксируем баннер
  const banner = document.querySelector('.article__banner');
  const initialOffset = banner.offsetTop; // Начальная позиция баннера

  window.addEventListener('scroll', function() {
    if (window.scrollY >= initialOffset) {
      banner.classList.add('fixed');
    } else {
      banner.classList.remove('fixed');
    }
  });

});