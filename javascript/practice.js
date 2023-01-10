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

      setTimeout(function () {
        $('.chat_wrap .inner').find('.item:last').addClass('on');
      }, 10);

      $('.chat_wrap .inner')
        .stop()
        .animate({ scrollTop: $('.chat_wrap .inner').height() }, 500);
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
