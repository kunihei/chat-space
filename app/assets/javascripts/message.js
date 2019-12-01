$(function(){

  
  function buildHTML(message){
    var html = (message.image.url !== null )? `<img class="lower-message__image" src="${message.image.url}">`: '';

    var html =  `<div class="main-message">
                  <div class="main-message__info">
                    <div class="main-message__info__name">
                      ${message.user_name}
                    </div>
                    <div class="main-message__info__day">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="main-message__words">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    ${html}
                  </div>
                </div>`
    return html;
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST', 
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $('.main-screen').animate({ scrollTop: $('.main-screen')[0].scrollHeight});
      $('#new_message')[0].reset();
      $('.main-search__buttom').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  })
});