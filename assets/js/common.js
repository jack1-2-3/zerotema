///////////////// ユーザー側 /////////////////

/* ------------ Scroll animation ------------ */

$('.animate').first().addClass('fade');

$(function () { 
    $(window).on('scroll', function() {
        var top = $(window).scrollTop();

        $('.animate').each(function () {
            classChange($(this),'fade', top);
        });

        $('.animate-line').each(function () {
            classChange($(this),'fade-line', top);
        });
    })
});

function classChange(thisCont, add, scrollTop) {
    if (thisCont.offset().top < scrollTop + ($(window).height() - $(window).height()/4)) {
        thisCont.addClass(add);
    }
}

/* ------------ メニュー・モーダル ------------ */

$(function() {
  $('.usermenu__toggle').click(function() {
    $(this).toggleClass('active');
  })
});

$(document).on('click', function(event) {
  if (!$(event.target).closest('.usermenu__toggle').length)  {
    $('.usermenu__toggle').removeClass('active');
  }
});

$(function() {
  $('.search-bar__time').click(function() {
    $('.time-modal, .search-bar__time a').toggleClass('active');
  })
});

$(document).on('click', function(event) {
  if (!$(event.target).closest('.time-modal, .search-bar__time a').length)  {
    $('.time-modal, .search-bar__time a').removeClass('active');
  }
});


/* ------------ カテゴリーモーダル ------------ */

(function($) {
  var $window = $(window),
      $html = $('.search-bar__right');
  function resize() {
    if ($window.width() < 767) {
        return $html.addClass('category__toggle');
    }
    $html.removeClass('category__toggle');
  }
  $window
    .resize(resize)
    .trigger('resize');
})(jQuery);


$(function() {
  $('.search-bar__right a, .category__toggle').click(function() {
    $('.category-modal').addClass('active');
    $('.js-disable').css('pointer-events','none');
  })

  $('.category-modal__close, .category__all').click(function() {
    $('.category-modal').removeClass('active');
    $('.js-disable').css('pointer-events','auto');
  })
});

$(document).on('click', function(event) {
  if (!$(event.target).closest('.category-modal, .category__toggle, .search-bar__right a').length)  {
    $('.category-modal').removeClass('active');
    $('.js-disable').css('pointer-events','auto');
  }
});


/* ------------ カテゴリー選択 ------------ */

jQuery('.category__single').each(function() {

  var onpress = jQuery(this),
      input = onpress.children('input');

    onpress.click(function() {
      if (onpress.hasClass('selected')) {
        onpress.removeClass('selected');
        input.prop('checked', false);
      }
      else if (onpress.children().is('input[id=all]')) {
        $('.category__single input').prop('checked', false);
        $('.category__single').removeClass('selected');
      }
      else {
        onpress.toggleClass('selected');
        input.prop('checked', true);
      }

      event.stopPropagation();
    });
});


/* ------------ 注文の流れ ------------ */

$(".order-step .basic-radio__container").on('click', function(){
  if (($(this).hasClass('disabled')) && $(this).children('input').prop('checked', false)) {
    $(this).children('input').prop('checked', true);
    $(this).removeClass('disabled');
    $(this).siblings().addClass('disabled');
    $(this).siblings().children('input').prop('checked', false);
  }
  else {
    return false;
  }
});


/* ------------ お気に入りアニメーション ------------ */

$(".fav").on('click', function(){
  if ($(this).hasClass('liked')) {
    $(this).removeClass('liked');
    $(this).css('background-position', 'left');
  }
  else {
    $(this).addClass('animating');
    $(this).addClass('liked');
    $(this).css('background-position', 'right');
  }
});

$(".fav").on('animationend', function(){
  $(this).removeClass('animating');
});


/* ------------ 商品数ボタン ------------ */

jQuery('<div class="quantity__controls"><div class="controls--more"></div><div class="controls--less"></div></div>').insertAfter('.calc__quantity input');
jQuery('.calc__quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.controls--more'),
    btnDown = spinner.find('.controls--less'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
});

jQuery('<div class="controls--less button button--black"><p>-</p></div>').insertBefore('.menu__input input');
jQuery('<div class="controls--more button button--black"><p>+</p></div>').insertAfter('.menu__input input');
jQuery('.menu__input').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.controls--more'),
    btnDown = spinner.find('.controls--less'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });
});



/* ------------ カートの商品を全て見る ------------ */

$(function() {
  $('.content-overflow').append('<div class="see-all__button"><a class="button button--grey h30"><p>もっと見る</p></a></div>');
});

$(function() {
  $('.see-all__button').click(function() {
    $(this).parent('.cart__contents').removeClass('content-overflow');
    $(this).remove();
  })
});


/* ------------ Fixed modal ------------ */

$(function() {
  var winScrollTop = $(window).scrollTop();

  $('.order-modal__toggle, .modal-trigger, .receipt-modal__toggle').click(function() {
    $('.modal').addClass('active');
    $('.modal__bg').addClass('visible');
    $('.modal__fixed').addClass('active');
    event.stopPropagation();
  })
});

$(function() {
  $('.modal__close').click(function() {
    $('.modal').removeClass('active');
    $('.modal__bg').removeClass('visible');
    $('.modal__fixed').removeClass('active');
  })
});

$(document).on('click', function(event) {
  if (!$(event.target).closest('.menu-modal, .order-modal, .receipt-modal').length)  {
    $(".modal").removeClass('active');
    $('.modal__bg').removeClass('visible');
    $('.modal__fixed').removeClass('active');
  }
});


/* ------------ カード番号ハイフン追加 ------------ */

$('[id*=expiration-mm],[id*=expiration-yy]').on('input',function(e){
  if (this.value.length > 2) {
      this.value = this.value.slice(0,2); 
  }
});

$('[id*=security_code]').on('input',function(e){
  if (this.value.length > 4) {
      this.value = this.value.slice(0,4); 
  }
});



///////////////// 店舗側 /////////////////


/* ------------ サイドバー ------------ */

$(function() {
  $('.trigger-icon__inner').click(function() {
    $('.main-aside').toggleClass('collapsed');
    $('.bread-crumb').toggleClass('fullwidth');
    $('.main-content').toggleClass('fullwidth');
    $('.ad_md-header').toggleClass('fullwidth');
  })
});

(function($) {
  var $window = $(window),
    $html = $('.ad_md');
  function resize() {
    if ($window.width() < 767) {
        return $html.addClass('sp');
    }
    $html.removeClass('sp');
  }
  $window
    .resize(resize)
    .trigger('resize');
})(jQuery);


$(function() {
  $('.sp .main-content').click(function() {
    $('.main-aside').removeClass('collapsed');
    $('.bread-crumb').removeClass('fullwidth');
    $('.main-content').removeClass('fullwidth');
    $('.ad_md-header').removeClass('fullwidth');
  })
});


/* ------------ モーダル ------------ */


$(function() {
  $('.userinfo__toggle').click(function() {
    $(this).toggleClass('active');
  })
});

$(document).on('click', function(event) {
  if (!$(event.target).closest('.userinfo__toggle, .usermenu__module').length)  {
    $('.userinfo__toggle').removeClass('active');
  }
});

$(function() {
  $('.filter__toggle').click(function() {
    $('.filter__modal, .filter__toggle').toggleClass('active');
  })
});

$(document).on('click', function(event) {
  if (!$(event.target).closest('.filter__toggle, .filter__modal, .ui-corner-all').length)  {
    $('.filter__toggle, .filter__modal').removeClass('active');
  }
});


/* ------------ 店舗登録　カテゴリーチェック数制限 ------------ */

var limit = 3;
$('input[name=ad_md-category]').on('change', function(evt) {
  if($("input[name='ad_md-category']:checked").length > limit) {
    this.checked = false;
  }
});


/* ------------ 店舗登録　営業時間入力フォーマット　曜日 ------------ */

jQuery('.opening-hours__top .basic-radio__container').each(function() {

  var onpress = jQuery(this),
    input = onpress.children('input'),
    display = onpress.parent().siblings('.opening-hours__bottom');

    $(function() {
      if (input.val() == "weekday-weekend" && input.prop('checked', true)) {
        display.children('.weekday-weekend__container').css('display','block');
      }
    });

    input.on('change', function(evt) {
      if (input.val() == "by-day" && input.prop('checked', true)) {
        onpress.addClass('active');
        onpress.siblings().removeClass('active');
        display.children('.by-day__container').css('display','block');
        display.children().not('.by-day__container').css('display', 'none');
      }
      else if (input.val() == "weekday-weekend" && input.prop('checked', true)) {
        onpress.addClass('active');
        onpress.siblings().removeClass('active');
        display.children('.weekday-weekend__container').css('display','block');
        display.children().not('.weekday-weekend__container').css('display', 'none');
      }
      else if (input.val() == "everyday" && input.prop('checked', true)) {
        onpress.addClass('active');
        onpress.siblings().removeClass('active');
        display.children('.everyday__container').css('display','block');
        display.children().not('.everyday__container').css('display', 'none');
      }
      else {
        return false;
      }
      event.stopPropagation();
    });
});


/* ------------ 店舗登録　営業時間入力フォーマット　時間帯 ------------ */

jQuery('.opening-hours__bottom .basic-radio__container').each(function() {

  var onpress = jQuery(this),
    input = onpress.children('input'),
    display = onpress.parents().parent().siblings('.bottomline');

    $(function() {
      if (input.val() == "2inputs" && input.prop('checked', true)) {
        display.append('<div class="single-day__input 2inputs"><div class="morning"><p>朝</p><input id="morning-from" type="time" name="morning-from" value="10:00"><p class="fromto">~</p><input id="morning-to" type="time" name="morning-to" value="15:00"></div><div class="evening"><p>昼</p><input id="evening-from" type="time" name="evening-from" value="17:00"><p class="fromto">~</p><input id="evening-to" type="time" name="evening-to" value="22:00"></div></div>');
      }
    });

    input.on('change', function(evt) {

      if (input.val() == "1input" && input.prop('checked', true)) {
        display.append('<div class="single-day__input 1input"><div class="allday"><input id="morning-from" type="time" name="morning-from" value="10:00"><p class="fromto">~</p><input id="morning-to" type="time" name="morning-to" value="15:00"></div></div>');
        display.children().not('.1input').remove();
      }
      else if (input.val() == "2inputs" && input.prop('checked', true)) {
        display.append('<div class="single-day__input 2inputs"><div class="morning"><p>朝</p><input id="morning-from" type="time" name="morning-from" value="10:00"><p class="fromto">~</p><input id="morning-to" type="time" name="morning-to" value="15:00"></div><div class="evening"><p>昼</p><input id="evening-from" type="time" name="evening-from" value="17:00"><p class="fromto">~</p><input id="evening-to" type="time" name="evening-to" value="22:00"></div></div>');
        display.children().not('.2inputs').remove();
      }
      else if (input.val() == "3inputs" && input.prop('checked', true)) {
        display.append('<div class="single-day__input 3inputs"><div class="morning"><p>朝</p><input id="morning-from" type="time" name="morning-from" value="10:00"><p class="fromto">~</p><input id="morning-to" type="time" name="morning-to" value="15:00"></div><div class="evening"><p>昼</p><input id="evening-from" type="time" name="evening-from" value="16:00"><p class="fromto">~</p><input id="evening-to" type="time" name="evening-to" value="20:00"></div><div class="night"><p>夜</p><input id="night-from" type="time" name="night-from" value="20:00"><p class="fromto">~</p><input id="night-to" type="time" name="night-to" value="00:00"></div></div>');
        display.children().not('.3inputs').remove();
      }
      else if (input.val() == "dayoff" && input.prop('checked', true)) {
        display.children().remove();
      }
      else {
        return false;
      }
      event.stopPropagation();
    });
});


/* ------------ 当日の日付にする ------------ */

// Date.prototype.toDateInputValue = (function() {
//   var local = new Date(this);
//   local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
//   return local.toJSON().slice(0,10);
// });
//
// $(document).ready( function() {
//     $('input[type=date]').val(new Date().toDateInputValue());
// })
//
// const monthControl = document.querySelector('input[type="month"]');
// const date= new Date()
// const month=("0" + (date.getMonth() + 1)).slice(-2)
// const year=date.getFullYear()
//
// monthControl.value = `${year}-${month}`;

/* ------------ tab ------------ */
$(function() {
  $('.tab').click(function(){

    $('.tab-active').removeClass('tab-active');
    $(this).addClass('tab-active');
    $('.content-active').removeClass('content-active');
    const index = $(this).index();
    $('.tab-main-content').eq(index).addClass('content-active');
  });
});

$(function() {
  $('img').click(function(){
    var src = $(this).attr('src');
    posi = $(window).scrollTop();
    $('body').css({
      position: 'fixed',
      top: -1 * posi
    });
    $('.test').show();
    $('#bigImg').attr('src',src);
    $('.overlay').show();
    $('.bigImg').show();
  });

  $('.overlay').click(function(){
    $('body').attr('style', '');
    $('html, body').prop({scrollTop: posi});
    $('.overlay').hide();
    $('.bigImg').hide();
  });



  $('.close').click(function(){
    $('body').attr('style', '');
    $('html, body').prop({scrollTop: posi});
    $('.overlay').hide();
    $('.bigImg').hide();
  });
});

$(function() {
  $(document).on('change', 'select',function() {
    if ($(this).val() == "") {
      $(this).css('color', '#A8A8A8')
    } else {
      $(this).css('color', '#464646')
    }

  });
});

$(function() {
  var addCount = 4;

  $(document).on('change', '.file-select', function (e) {
    var reader = new FileReader();
    $(this).parent().css('display', 'none');
    var imgId = '#preview_' + $(this).parent().data('img');
    var tagId = '#tag_' + $(this).parent().data('img');

    reader.onload = function () {
      $(imgId).attr('src', reader.result);
      $(imgId).css('display', 'block');
      $(imgId).next().css('display', 'block');
      $(tagId).prop("disabled", false);
    }

    reader.readAsDataURL(e.target.files[0]);
  });

  $('.delete_img').on('click',function(){
    var id = '#' + $(this).data('img');
    var imgId = '#preview_' + $(this).data('img');
    var labelId = '#label_' + $(this).data('img');
    var tagId = '#tag_' + $(this).data('img');
    $(id).val('');
    $(imgId).css('display', 'none');
    $(labelId).css('display', 'block');
    $(tagId).prop("disabled", true);
    $(this).css('display','none');
  });

  $('#add_file_button').on('click', function(){
    if (addCount < 10) {
      addCount += 1;
      if (addCount == 10) {
        $(this).css('display','none');
      }
      var imgCount = 'img_' + addCount;

      $('<dl>' +
          '<dt></dt>' +
          '<dd>' +
          '<div class="prev-image-box">' +
          '<label id="label_' + imgCount + '" for="' +imgCount + '" class="file-select_label" data-img="' + imgCount + '">ファイルを選択\n' +
          '<input type="file" id="' + imgCount + '" class="file-select">' +
          '</label>' +
          '<img id="preview_' + imgCount + '" class="prev-image" src="">' +
          '<div class="delete_img" data-img="' + imgCount + '">' +
          '</div>' +
          '</div>' +
          '<div>' +
          '<label class="select-tag">タグ</label>' +
          '<div class="select-wrap">' +
          '<div class="select-img">\n' +
          '<img src="./assets/img/pulldown_icon.png">\n' +
          '</div>' +
          '<select class="image_tag" id="tag_'+ imgCount + '" disabled>' +
          '<option value="">選択してください</option>' +
          '<option value="医療画像">医療画像</option>' +
          '<option value="採血">採血</option>' +
          '<option value="健康診断">健康診断</option>' +
          '<option value="患部">患部</option>' +
          '<option value="その他">その他</option>' +
          '</select>' +
          '</div>' +
          '</div>' +
          '</dd>' +
          '</dl>').insertBefore($(this).parent());
      $(this).parent();

    }
  });
});
