'ust strict';

// 추천컨텐츠
let overlay = document.querySelector('overlay-black');

// 채팅봇
let chatClick = document.querySelector('.chatBot');
let chatDiv = document.querySelector('.chat_wrap');
let closeBtn = document.querySelector('.close__chatDiv');

chatClick.addEventListener('click', function () {
  chatClick.style.display = 'none';
  chatDiv.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  chatDiv.classList.add('animate__fadeOutDown');
  chatDiv.classList.remove('animate__fadeOutDown');
  chatDiv.style.display = 'none';
  chatClick.style.display = 'block';
});

$(function () {
  $('.send-msg').keypress(function (e) {
    if (e.keyCode == 13 && $(this).val().length) {
      let _val = $(this).val();
      let _class = $(this).attr('class');
      $(this).val('');
      let _tar = $('.chat_wrap .inner').append(
        '<div class="item ' +
          _class +
          '"><div class="box"><p class="msg">' +
          _val +
          '</p><span class="time">' +
          currentTime() +
          '</span></div></div>'
      );

      let lastItem = $('.chat_wrap .inner').find('.item:last');
      setTimeout(function () {
        lastItem.addClass('on');
      }, 10);

      let position =
        lastItem.position().top + $('.chat_wrap .inner').scrollTop();
      console.log(position);

      $('.chat_wrap .inner').stop().animate({ scrollTop: position }, 500);
    }
  });
});

let currentTime = function () {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let apm = hh > 12 ? '오후' : '오전';
  let ct = apm + ' ' + hh + ':' + mm + '';
  return ct;
};
