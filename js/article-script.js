$(document).ready(function() {
  $('.article__active__item--original, .article__active__item--clone').on('click', function() {
    $('.article__contents').toggleClass('article__contents_active');
  });
  
  // $('.article-close-contents').on('click', function() {
  //   $('.article__contents').removeClass('article__contents_active');
  // });


  //значок содержания прилипает к меню при прокрутке
  const $original = $('.article__active__item--original');
  const $clonePlace = $('.article__active__item--clone');
  const $articleActive = $('.article__active');
  const $targetHeading = $('#target-heading');
  
  // Создаем клон элемента
  const $clone = $original.clone().removeClass('article__active__item--original');
  
  function updatePosition() {
    const targetTop = $targetHeading.offset().top;
    const articleBottom = $articleActive.offset().top + $articleActive.outerHeight();
    const scrollTop = $(window).scrollTop();
    
    if (targetTop <= articleBottom) {
      // Показываем клон в sticky-контейнере
      $clonePlace.html($clone).css('display', 'block');
      $original.hide();
    } else {
      // Показываем оригинал в контенте
      $clonePlace.css('display', 'none');
      $original.show();
    }
  }
  
  $(window).scroll(updatePosition);
  updatePosition(); // Инициализация

});